import axios from 'axios';
import cookie from 'cookie';
import type { User } from '../types';
import { BASE_URL} from './api';

const API_URL = 'http://148.113.143.59:8081/api'; // Remplacez par l'URL de votre API

/* export async function login(email: string, password: string): Promise<boolean> {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        const { token } = response.data;

        // Stocker le token dans un cookie
        document.cookie = cookie.serialize('token', token, { path: '/' });
        return true;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        return false;
    }
} */

export async function login(email: string, password: string) {
    try {
        /* document.cookie = cookie.serialize('auth', JSON.stringify({ id:1, role:'SECRETAIRE', token:"ok" }), {
            path: '/',
            httpOnly: false, // Permet de rendre le cookie accessible au client
            secure: false, // Utilisez `true` si votre site est en HTTPS
            maxAge: 60 * 60 * 24 // Durée de vie du cookie (1 jour ici)
        });
         */
        const response = await axios.post(`${BASE_URL}/login`,JSON.stringify({ email, password }) );
        const { token, id } = response.data; // Assurez-vous que l'API renvoie l'ID et le rôle

        // Stocker l'objet utilisateur (id, role) dans un cookie
        document.cookie = cookie.serialize('auth', JSON.stringify({ id:id,email:email, role:'SECRETAIRE', token:token }), {
            path: '/',
            httpOnly: false, // Permet de rendre le cookie accessible au client
            secure: false, // Utilisez `true` si votre site est en HTTPS
            maxAge: 60 * 60 * 24 // Durée de vie du cookie (1 jour ici)
        });

        return true;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        return false;
    }
}

export async function verfication(email: string) {
  try {
    const response = await axios.post(`${BASE_URL}/user/verification/${email}`, {});
    const responseData = response.data;

    let responseJson;

    if (responseData.isConfirmed !== undefined) {
      responseJson = {
        existe: true,
        confirmed: responseData.isConfirmed,
        message: '',
      };
    } else {
      responseJson = {
        existe: false,
        confirmed: null,
        message: responseData.message,
      };
    }

    return responseJson; // Renvoie l'objet correctement construit
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    return {
      existe: false,
      confirmed: null,
      message: 'Erreur lors de la connexion',
    }; // Retourne un objet avec un message d'erreur en cas d'échec
  }
}

export async function confirmationCompte(email:string,newPassword:string){
  try {
    const response = await axios.post(`${BASE_URL}/change-password`, JSON.stringify({email, newPassword }));
    const responseData = response.data;

    let responseJson;
  
    if(responseData.message === "Password changed successfully"){
      responseJson  = {
        status: true,
        message: responseData.message,
      };
    }else{
      responseJson  = {
        status: false,
        message: responseData.message,
      };

    }
  return responseJson;
  } catch (error) {
    return {
      status: false,
      message: "Veillez réessayer plus tard un probleme est survenu",
    };
  }


}
export async function motPasseOublie(email:string,newPassword:string){
  try {
    const response = await axios.put(`${BASE_URL}/update-password`, JSON.stringify({email, newPassword }));
    const responseData = response.data;
  return true;
  } catch (error) {
    return {
      status: false,
      message: "Veillez réessayer plus tard un probleme est survenu",
    };
  }


}

export function logout() {
    // Supprimer le token d'authentification en vidant le cookie
    document.cookie = cookie.serialize('auth', '', {
        expires: new Date(0),
        path: '/'
    });
}


// Nouvelle fonction pour obtenir les cookies
export function getAuthCookie():User {
    // Parse les cookies du document
    const cookies = cookie.parse(document.cookie);

    // Récupère le cookie "auth"
 /*    if (cookies.auth) {  */
        const auth = JSON.parse(cookies.auth);
        const user = { id: auth.id,email:auth.email, role: auth.role,token:auth.token };
        
        return user;
   /*  }  */

    
    // Si aucun cookie d'authentification n'est trouvé
    //return null;
}
