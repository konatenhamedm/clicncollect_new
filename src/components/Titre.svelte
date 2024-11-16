<script lang="ts">
    export let titre: string;
    export let lien: string;
    export let color: string | undefined;
  </script>
  
  <div class=" items-center mb-4 grid grid-cols-1 md:grid-cols-4">
    <div class=" flex md:col-span-3 ">
      <span class="flex border-b-2 items-center mb-4 border-[#FF6600] uppercase">
      <svg
          class="w-6 h-6 text-orange-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <h2 class="text-2xl font-bold text-gray-700">{titre}</h2>
  
      </span>
     
    </div>
  
    {#if lien != "detail"}
    <a href={lien} class={color ? `text-[${color}] md:col-span-1 flex justify-center md:justify-end` : "text-[#0076d7] md:col-span-1 flex justify-center md:justify-end"}>
      Voir plus >
    </a>
  {/if}
    
  </div>
  