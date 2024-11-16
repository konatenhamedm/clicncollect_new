<script lang="ts">
  import Titre from "./Titre.svelte";

    let slider: HTMLElement | null;
  
    const scrollLeft = () => {
      if (slider) {
        slider.scrollBy({ left: -200, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (slider) {
        slider.scrollBy({ left: 200, behavior: "smooth" });
      }
    };
  
    const categories = [
      { id: 1, name: "Électronique", icon: "M3 10h11M9 21v-8m5-5h2l3 5v3a1 1 0 01-1 1h-5" },
      { id: 2, name: "Mode", icon: "M3 3h6l1 7h8m0 0h2a1 1 0 001-1V7a1 1 0 00-1-1h-2m-5 5V7m-6 7h4m-2 0v5" },
      { id: 3, name: "Beauté", icon: "M12 3v18m6-6H6" },
      { id: 4, name: "Sport", icon: "M12 4.354a4.5 4.5 0 00-3 4.146 4.5 4.5 0 009 0 4.5 4.5 0 00-3-4.146M9.35 15.783A4.5 4.5 0 0112 17.646a4.5 4.5 0 012.65-1.863" },
      { id: 5, name: "Alimentation", icon: "M3 8l7 7-7 7M16 8l7 7-7 7" },
      { id: 6, name: "Jouets", icon: "M5 3a2 2 0 012 2v3a2 2 0 01-2 2H3m18 0h-2a2 2 0 01-2-2V5a2 2 0 012-2h2" },
      { id: 7, name: "Santé", icon: "M10 9a3 3 0 016 0 3 3 0 01-6 0zm0 4h6v2H10v-2z" },
      { id: 8, name: "Livres", icon: "M4 19.5A2.5 2.5 0 006.5 22h11A2.5 2.5 0 0020 19.5V4h-2v15.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V4H4v15.5z" },
      { id: 9, name: "Musique", icon: "M9 19V5l12-2v14m-12 2h12a1 1 0 001-1v-2a1 1 0 00-1-1H9m0 4v-4m0 4H5a1 1 0 01-1-1v-2a1 1 0 011-1h4m0 4V5" },
      { id: 10, name: "Meubles", icon: "M3 10h18M3 6h18M7 16h10M5 20h14" },
      { id: 11, name: "Meubles", icon: "M3 10h18M3 6h18M7 16h10M5 20h14" },
    ];
  </script>
  
  <style>
    .scrollbar-hide {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  
    .scrollbar-hide::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  
    .btn-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.8);
      color: #f97316;
      padding: 8px;
      border-radius: 50%;
      border: 1px solid #f97316;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s ease-in-out;
    }
  
    .btn-nav:hover {
      background-color: #f97316;
      color: white;
    }
  
    .btn-left {
      left: 8px;
    }
  
    .btn-right {
      right: 8px;
    }
  
    .category-card {
      background: white;
      border: 1px solid #e5e5e5;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .category-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  </style>
  
  <div class="border-t-1 border-orange-500  mt-2 pt-2">
<Titre titre="Catégories" lien="details" color=""/>

    <!-- <div class="flex items-center mb-4">
      <svg
        class="w-6 h-6 text-orange-500 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <h2 class="text-2xl font-bold text-gray-700">Catégories</h2>
    </div> -->
  
    <div class="relative">
      <button class="btn-nav btn-left" on:click={scrollLeft}>
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="btn-nav btn-right" on:click={scrollRight}>
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
  
      <div
        bind:this={slider}
        class="flex space-x-4 overflow-x-auto scrollbar-hide"
      >
        {#each categories as category}
          <div
            class="category-card min-w-[150px] flex-shrink-0 rounded-lg p-4 text-center cursor-pointer"
          >
            <div class="flex justify-center mb-2">
              <svg
                class="w-12 h-12 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={category.icon}
                />
              </svg>
            </div>
            <p class="text-gray-700 font-medium">{category.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  