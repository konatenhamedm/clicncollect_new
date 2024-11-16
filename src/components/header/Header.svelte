<script>
    import { writable } from 'svelte/store';
  
    // Simuler l'état de connexion de l'utilisateur
    const isLoggedIn = writable(true);
    const userProfileImage = writable('https://example.com/path/to/user-profile-image.jpg'); // URL de l'image de profil
    const userName = writable('John Doe'); // Nom de l'utilisateur
  
    // Contrôler l'affichage du menu déroulant
    let showDropdown = writable(false);
  
    // Fonction pour fermer le menu déroulant si on clique ailleurs
    function handleClickOutside(event) {
      if (!event.target.closest('.profile-dropdown')) {
        showDropdown.set(false);
      }
    }
  
    // Ajouter un gestionnaire d'événements lors du montage du composant
    import { onMount, onDestroy } from 'svelte';
    onMount(() => {
      document.addEventListener('click', handleClickOutside);
    });
  
    onDestroy(() => {
      document.removeEventListener('click', handleClickOutside);
    });
  </script>
  
  <header class="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between p-4 bg-white border-b border-gray-300">
    <!-- Left side: Logo -->
    <div class="text-xl font-bold text-orange-500">
      <img src="/logo2.jpg" alt="logo" class="w-[6rem] md:w-[16rem]"/>
    </div>
  
    <!-- Center: Sell button -->
    <button class="bg-orange-500 text-white py-1 px-4 rounded-lg hover:bg-orange-600 mt-2 md:mt-0 md:mx-4">
      Vendez sur clicncollect <span class="font-bold text-2md">+</span>
    </button>
  
    <!-- Right side: Icons with labels -->
    <div class="flex gap-4 items-center mt-2 md:mt-0">
      <div class="flex flex-col items-center text-center text-black cursor-pointer">
        <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="Panier" class="w-6 h-6"/>
        <p class="text-xs">Panier</p>
      </div>
      <div class="flex flex-col items-center text-center text-black cursor-pointer">
        <img src="https://img.icons8.com/ios/50/000000/history.png" alt="Historique" class="w-6 h-6"/>
        <p class="text-xs">Historique</p>
      </div>
      <div class="flex flex-col items-center text-center text-black cursor-pointer">
        <img src="https://img.icons8.com/ios/50/000000/help.png" alt="Aide" class="w-6 h-6"/>
        <p class="text-xs">Aide</p>
      </div>
      <div class="flex flex-col items-center text-center text-black cursor-pointer">
        <img src="https://img.icons8.com/ios/50/000000/email.png" alt="Messages" class="w-6 h-6"/>
        <p class="text-xs">Messages</p>
      </div>
  
      <!-- Profil / Connexion -->
      {#if $isLoggedIn}
        <div class="relative profile-dropdown">
          <div class="flex flex-col items-center text-center text-black cursor-pointer" on:click={() => showDropdown.set(!($showDropdown))}>
            <img src="/logo2.jpg" alt="Profil" class="w-6 h-6"/>
            <p class="text-xs">{$userName}</p>
  
            <!-- Dropdown Menu -->
            {#if $showDropdown}
              <div class="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg w-40 rounded-lg transition-all duration-200 ease-in-out">
                <ul class="text-black text-sm">
                  <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mon profil</li>
                  <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Paramètres</li>
                  <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Déconnexion</li>
                </ul>
              </div>
            {/if}
          </div>
        </div>
      {:else}
        <!-- Affichage du bouton de connexion si l'utilisateur n'est pas connecté -->
        <div class="flex flex-col items-center text-center text-black cursor-pointer">
          <img src="https://img.icons8.com/ios/50/000000/user.png" alt="Se connecter" class="w-6 h-6"/>
          <p class="text-xs">Se connecter</p>
        </div>
      {/if}
    </div>
  </header>
  