<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import MenuSkeleton from '$components/_skeletons/Menu_skeleton.svelte';
  import Menu from '../../routes/data/menu.json';

  let main_data = Menu;
  let activeMenuIndex: any = ""; // Pour gérer l'élément actif
  
  let isLoading = true;

  // Simulation du chargement (remplacer par votre logique réelle de chargement)
  setTimeout(() => {
    isLoading = false;
  }, 2000);

  function toggleMenu(index: any, index_sous_menu: any) {
    if (activeMenuIndex === index) {
      activeMenuIndex = -1; // Fermer si le même menu est cliqué
    } else {
      activeMenuIndex = index; 
    }
  }

  // Lors du montage, définir le sous-menu actif basé sur l'URL
  onMount(() => {
    const currentPath = $page.url.pathname;
    
    main_data.forEach((menu, index) => {
      if (menu.sous_menu.length > 0) {
        menu.sous_menu.forEach((sous_menu, index_sous_menu) => {
          sous_menu.menus.forEach((menu_sous_menu) => {
            if (currentPath === menu_sous_menu.code) {
              activeMenuIndex = `${index}_${index_sous_menu}`;
            }
          });
        });
      }
    });
  });
</script>

<!-- Début de la barre latérale -->
<div class="deznav shadow-lg shadow-gray-200 border-r-2 border-r-[#5f9fd6]">

  <div class="deznav-scroll mm-active">
    <ul class="metismenu mm-show" id="menu">

      <!-- Affichage du skeleton pendant le chargement -->
      {#if isLoading}
        {#each Array(3) as _}
          <MenuSkeleton/>
        {/each}
      {:else}
        {#each main_data as menu, index}
          <li class="menu-title">{menu.libelle}</li>

          {#if menu.sous_menu.length > 0}
          {#each menu.sous_menu as sous_menu, index_sous_menu}
            <li class="{activeMenuIndex === `${index}_${index_sous_menu}` ? 'mm-activey' : ''}">
              <a class="has-arrow" href="javascript:void(0);" on:click={() => toggleMenu(`${index}_${index_sous_menu}`, index)}>
                <div class="menu-icon">
                  {#if sous_menu.icon != null}
                    <i class="{sous_menu.icon} w-[25px] h-[25px] mt-[10px]"></i>
                  {:else}
                    <!-- Icône par défaut -->
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  {/if}
                </div>
                <span class="nav-text">{sous_menu.libelle}</span>
              </a>
              <!-- Utiliser une combinaison unique d'index -->
              <ul class="{activeMenuIndex === `${index}_${index_sous_menu}`  ? 'sub-menu mm-collapse mm-show left' : 'sub-menu mm-collapse left'}">
                {#each sous_menu.menus as menu_sous_menu}
                  <li class={$page.url.pathname === menu_sous_menu.code ? "mm-active" : ''}>
                    <a href="{menu_sous_menu.code}" class={$page.url.pathname === menu_sous_menu.code ? "mm-active" : ''}>{menu_sous_menu.libelle}</a>
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
          {/if}

          {#each menu.menu_directe as menu_directe, index_menu_direct}
            <li class={$page.url.pathname === menu_directe.code || (index == 0 && index_menu_direct == 0 && menu.sous_menu.length == 0 && $page.url.pathname =='/admin') ? "mm-active" : ''}>
              <a href="{menu_directe.code}" class={$page.url.pathname === menu_directe.code ? "mm-active" : ''} on:click={() => toggleMenu(`${index}_${index_menu_direct}`, index)}>
                <div class="menu-icon">
                  {#if menu_directe.icon != null}
                    <i class="{menu_directe.icon} w-[24px] h-[24px] mt-2"></i>
                  {:else}
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  {/if}
                </div>
                <span class="nav-text">{menu_directe.libelle}</span>
              </a>
            </li>
          {/each}
        {/each}
      {/if}
    </ul>
  </div>
</div>
