import cookie from 'cookie';

export const BASE_URL = "https://3igifcuhxi.execute-api.us-east-1.amazonaws.com/dev/lebedoo/backoffice/v1/admin";
export const BASE_URL_LOCAL = "http://localhost:8000/api/civilite";
export const BASE_URL_LOCAL_AUTH = "http://localhost:8000/api";

export async function apiFetch(
  url: string,
  method: string = 'GET',
  data: any = null,
  options: RequestInit = {}
): Promise<any> {
  let token = null;

  // Ensure this code runs only on the client (browser)
  if (typeof document !== 'undefined') {
    const parsedCookies = cookie.parse(document.cookie);
    if (parsedCookies.auth) {
      token = JSON.parse(parsedCookies.auth).token;
    }
  }

  // Add Authorization header if a token is present
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Add default headers for requests with a payload
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };
  }

  // Set the request method
  options.method = method;

  // Add the request body if data is present
  if (data) {
    options.body = JSON.stringify(data);
  }

  // Perform the fetch request
  const response = await fetch(BASE_URL + url, options);

  // Check for errors
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Unauthorized');
    }
    throw new Error(`Error: ${response.statusText}`);
  }

  // Return the response as JSON
  return response.json();
}
