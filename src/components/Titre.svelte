<script lang="ts">
    export let titre: string;
    export let lien: string;
    export let color: string | undefined;
  </script>
  
  <div class="items-center mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Titre avec icône -->
    <div class="flex md:col-span-3 items-center">
      <span class="flex border-b-2 border-orange-500 items-center uppercase">
        <svg
          class="w-6 h-6 text-orange-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <h2 class="text-lg md:text-2xl font-bold text-gray-700">
          {titre}
        </h2>
      </span>
    </div>
  
    <!-- Lien Voir Plus -->
    {#if lien != "detail"}
    <a 
      href={lien} 
      class={`text-sm md:text-base font-medium ${
        color ? `text-[${color}]` : "text-blue-500"
      } md:col-span-1 flex justify-end`}
    >
      Voir plus &gt;
    </a>
    {/if}
  </div>
  
  