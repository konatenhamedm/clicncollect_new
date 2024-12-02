<script>
  import { writable } from 'svelte/store';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  // Variable pour détecter si l'appareil est mobile
  const isMobile = writable(false);

  // Fonction pour vérifier la largeur de la fenêtre
  function checkIfMobile() {
    if (browser) {
      isMobile.set(window.innerWidth <= 768);
    }
  }

  onMount(() => {
    if (browser) {
      checkIfMobile(); // Vérification initiale
      window.addEventListener('resize', checkIfMobile); // Écouteur pour les changements de taille
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('resize', checkIfMobile); // Nettoyage des événements
    }
  });

  // État du menu : ouvert ou fermé
  const isMenuOpen = writable(false);

  // Fonction pour basculer l'état du menu
  function toggleMenu() {
    isMenuOpen.update((current) => !current);
  }

  // Stocker la position de l'utilisateur
  const userLocation = writable({ latitude: null, longitude: null });
  const locationError = writable(null);

  // Fonction pour récupérer la position géographique
  function getUserLocation() {
    if (!navigator.geolocation) {
      locationError.set("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation.set({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        locationError.set(null); // Réinitialiser les erreurs
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            locationError.set("L'utilisateur a refusé la demande de géolocalisation.");
            break;
          case error.POSITION_UNAVAILABLE:
            locationError.set("Les informations de localisation ne sont pas disponibles.");
            break;
          case error.TIMEOUT:
            locationError.set("La demande de géolocalisation a expiré.");
            break;
          default:
            locationError.set("Une erreur inconnue est survenue.");
        }
      }
    );
  }

</script>

<style>
   .location-info {
    font-size: 14px;
    margin-top: 10px;
    color: #4b5563; /* Gris */
  }
  .error-message {
    color: #ef4444; /* Rouge vif */
    font-size: 14px;
    margin-top: 10px;
  }
  .hidden {
    display: none;
  }

   /* Styles pour le menu latéral */
   .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  /* Overlay semi-transparent */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  /* Bouton de menu */
  button#menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  /* Style des éléments de la sidebar */
  .sidebar ul {
    list-style: none;
    padding: 1rem;
  }

  .sidebar li {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: black;
    cursor: pointer;
  }

  .sidebar li:last-child {
    margin-top: 1rem;
    background-color: orange;
    color: white;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  .sidebar li:last-child:hover {
    background-color: darkorange;
  }

  /* Section Profil */
  .profile-section {
  text-align: center;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre les éléments horizontalement */
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.profile-name {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.profile-email {
  font-size: 0.875rem;
  color: #666;
}

/* Liste des options */
.menu-options {
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.menu-options li {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;
}

.menu-options li:hover {
  color: orange;
}

/* Footer */
/* Footer */
/* .sidebar-footer {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #e5e5e5;
  font-size: 0.875rem;
  color: #333;
} */

.sidebar-footer {
  position: absolute; /* Assurez-vous qu'il est positionné par rapport à la sidebar */
  bottom: 0;
  width: 100%; /* S'assurer qu'il occupe toute la largeur du menu */
  text-align: center;
  padding: 1rem 0;
  border-top: 0px solid #e5e5e5;
  font-size: 0.875rem;
  background-color: white; /* S'assurer qu'il a un fond distinct */
  color: #333;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

/* Logo dans le footer */
.footer-logo {
  margin-bottom: 1rem;
}

.footer-logo-img {
  width: 100px; /* Ajustez la taille du logo */
  height: auto;
  object-fit: contain;
}

/* Liens dans le footer */
.footer-link {
  color: #333;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Style du compteur */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.bg-red-500 {
  background-color: #ef4444;
}

.rounded-full {
  border-radius: 9999px;
}

.text-xs {
  font-size: 0.75rem;
}

.shadow-md {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.counter {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ef4444; /* Rouge vif */
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

</style>

<header class="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-white border-b border-gray-300">
  <!-- Mobile Menu Toggle -->
  <button id="menu-toggle" on:click={toggleMenu} class:hidden={!$isMobile}>
    <img src="https://img.icons8.com/ios-filled/50/000000/menu.png" alt="Menu" class="w-8 h-10" />
  </button>

  <!-- Logo (caché sur mobile) -->
  <div class="text-xl font-bold text-orange-500" class:hidden={$isMobile}>
    <img src="/logo2.jpg" alt="logo" class="w-[6rem] md:w-[16rem]" />
  </div>

  <!-- Barre de recherche -->
  <div class="flex border-2 focus-within:border-gray-400 rounded-lg px-6 mr-2 ml-4 py-2 overflow-hidden w-full" class:hidden={!$isMobile}>
    
    <div class="flex flex-col items-center text-center text-black cursor-pointer mr-4" on:click={getUserLocation}>

      <img
        src="https://img.icons8.com/ios/50/000000/marker.png "
        alt="Géolocalisation"
        class="w-4 h-4"
      />
      <!-- <p class="text-xs">Localisation</p> -->
    </div>
    <input
      class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
      type="text"
      id="search"
      placeholder="Recherche..."
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.904 192.904"
      width="16px"
      class="cursor-pointer fill-gray-600"
    >
      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
    </svg>
  </div>

  <div class="flex border-2 focus-within:border-gray-400 rounded-lg px-6 mr-2 ml-4 py-2 overflow-hidden  w-1/3" class:hidden={$isMobile}>
    <div class="flex flex-col items-center text-center text-black cursor-pointer mr-4" on:click={getUserLocation}>

      <img
        src="https://img.icons8.com/ios/50/000000/marker.png "
        alt="Géolocalisation"
        class="w-4 h-4"
      />
      <!-- <p class="text-xs">Localisation</p> -->
    </div>
    <input
      class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
      type="text"
      id="search"
      placeholder="Recherche..."
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.904 192.904"
      width="16px"
      class="cursor-pointer fill-gray-600"
    >
      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
    </svg>
  </div>


  <div class="flex flex-col items-center text-center text-black cursor-pointer relative" class:hidden={!$isMobile}>
    <!-- Icône de panier -->
    <img
      src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
      alt="Panier"
      class="w-8 h-7"
    />
    <!-- Nombre d'articles en exposant -->
    <span
      class="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md"
    >
      {"15"}
    </span>
    <p class="text-xs"></p>
  </div>

  <!-- Icônes et Dropdown -->
  <div class="hidden md:flex gap-4 items-center">
    <!-- <div class="flex flex-col items-center text-center text-black cursor-pointer">
      <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="Panier" class="w-6 h-6" />
      <p class="text-xs">Panier</p>
    </div> -->
    
    <div class="flex flex-col items-center text-center text-black cursor-pointer relative" >
      <!-- Icône de panier -->
      <img
        src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
        alt="Panier"
        class="w-6 h-6"
      />
      <!-- Nombre d'articles en exposant -->
      <span
        class="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md"
      >
        {"15"}
      </span>
      <p class="text-xs">Panier</p>
    </div>
    <div class="flex flex-col items-center text-center text-black cursor-pointer">
      <img src="https://img.icons8.com/ios/50/000000/email.png" alt="Messages" class="w-6 h-6" />
      <p class="text-xs">Nous contacter</p>
    </div>
    <div class="relative profile-dropdown" on:click={toggleMenu}>
      <div class="flex flex-col items-center text-center text-black cursor-pointer">
        <img src="/logo2.jpg" alt="Profil" class="w-7 h-7 rounded-md border border-green-400" />
        <p class="text-xs">John Doe</p>
      </div>
    </div>
  </div>

  <!-- Menu Mobile -->
  <div class="absolute top-16 left-0 w-full bg-white border-t border-gray-300 hidden" id="mobile-menu">
    <ul class="flex flex-col items-center gap-4 py-4">
      <li class="text-black text-sm">Panier</li>
      <li class="text-black text-sm">Nous contacter</li>
      <li class="text-black text-sm">Se connecter</li>
     
    </ul>
  </div>
</header>

<!-- Overlay -->
{#if $isMenuOpen}
  <div class="overlay" on:click={toggleMenu}></div>
{/if}

<!-- Menu latéral -->
<div class="sidebar { $isMenuOpen ? 'open' : '' }">
  <!-- Section profil -->
  <div class="profile-section ">
    <img
      src="/profil.webp"
      alt="Profil"
      class="profile-image"
    />
    <p class="profile-name">John Doe</p>
    <p class="profile-email">john.doe@example.com</p>
  </div>

  <!-- Liste des options -->
  <ul class="menu-options">
    <li>Panier</li>
    <li>Nous contacter</li>
    <li>Ma boutique</li>
    <li>Se connecter</li>
    <li>Vendez sur clicncollect</li>
  </ul>


  <!-- Footer -->
  <!-- Footer -->
  <footer class="sidebar-footer">
    <div class="footer-logo flex w-full pr-2 pl-2">
      <img
        src="/logo2.jpg" 
        alt="Logo Clicncollect"
        class="footer-logo-img w-full"
      />

     
      
    </div>
    <p>&copy; 2024 Clicncollect <span class="footer-info">Tous droits réservés.</span></p>
    <p>
      Contact : 
      <a href="mailto:support@clicncollect.com" class="footer-link">support@clicncollect.com</a>
    </p>
  </footer>
</div>
