<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Entete from '$components/_includes/Entete.svelte';

  let chartUsersService, chartTransactions;
  let endUsers = 150;  // Exemple de nombre d'end users
  let adminUsers = 20;  // Exemple de nombre d'admin users
  let dailyTransactions = 45; // Exemple du nombre de transactions du jour

 

</script>


<Entete libelle="Opération" descr="Liste des icones " lien="/admin/icons" />

<div class="container-fluid">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Card pour les end users -->
    <div class="bg-white shadow-md rounded-lg p-6 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      <div>
        <h3 class="text-lg font-semibold">Nombre d'End Users</h3>
        <p class="text-4xl font-bold text-green-600">{endUsers}</p>
      </div>
    </div>

    <!-- Card pour les admin users -->
    <div class="bg-white shadow-md rounded-lg p-6 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      <div>
        <h3 class="text-lg font-semibold">Nombre d'Admin Users</h3>
        <p class="text-4xl font-bold text-blue-600">{adminUsers}</p>
      </div>
    </div>

    <!-- Card pour les transactions du jour -->
    <div class="bg-white shadow-md rounded-lg p-6 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-purple-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a5 5 0 00-10 0v2a3 3 0 00-2 2.82V16a3 3 0 003 3h10a3 3 0 003-3v-4.18A3 3 0 0017 9z" />
      </svg>
      <div>
        <h3 class="text-lg font-semibold">Transactions aujourd'hui</h3>
        <p class="text-4xl font-bold text-purple-600">{dailyTransactions}</p>
      </div>
    </div>
  </div>

  <!-- Grille pour les deux graphiques -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  <!-- Graphique des utilisateurs par service -->
  <div>
    <h2 class="text-xl font-semibold mb-4">Répartition des utilisateurs par service</h2>
    <div id="usersServiceChart" class="w-full h-64"></div>
  </div>

  <!-- Graphique des transactions par jour -->
  <div>
    <h2 class="text-xl font-semibold mb-4">Nombre de transactions par jour</h2>
    <div id="transactionsChart" class="w-full h-64"></div>
  </div>
</div>

</div>
