<script>
  import Card from "$components/Card.svelte";
  import CardMaque from "$components/CardMaque.svelte";
  import CardMarchand from "$components/CardMarchand.svelte";
import Categorie from "$components/Categorie.svelte";
  import Titre from "$components/Titre.svelte";
import Slide from "../components/Slide.svelte";


</script>

<Slide/>

<div class="grid grid-cols-1 md:grid-cols-4 border-2 border-orange-500 mt-2 p-1 gap-4 items-center">
  <!-- Texte -->
  <div class="md:col-span-3 px-5">
    <h1 class="text-md md:text-2xl text-center md:text-left">
      Augmentez vos ventes dès aujourd’hui !
    </h1>
  </div>
  <!-- Bouton -->
  <div class="md:col-span-1 flex justify-center md:justify-end">
    <button class="w-full md:w-auto bg-orange-500 text-white py-1 px-4 rounded-lg hover:bg-orange-600 justify-end">
      <span class="p-2">Créez votre boutique en ligne</span>
      <span class="font-bold text-lg ml-2">+</span>
    </button>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-4  mt-2 p-2 gap-4">
<div class="md:col-span-3">

</div>
<div class="md:col-span-1 flex justify-center md:justify-end">
  <div class="grid grid-cols-2">
     <div>
      
     </div>
     <div>

      <div class="flex text-end border-2 focus-within:border-gray-400 rounded-lg px-6 py-2 overflow-hidden max-w-52 max-lg:hidden">
     
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
     </div>
  </div>

</div>
</div>

<Categorie/>

<div class="mt-8">
</div>

<Titre titre="Pour vous" lien="details" color=""/>
<div class="grid grid-cols-1 md:grid-cols-6 gap-4">
  {#each [1,2,3,4,5,6,7,8,9,10] as index_}
  <Card/>
  {/each}
</div>
<div class="mt-8">
</div>

<Titre titre="Marchands" lien="details" color=""/>
<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
  {#each [1,2,3,4,5] as index_}
    <CardMarchand/>
  {/each}
</div>
<div class="mt-8">
</div>

<!-- <Titre titre="Vendus par ClicnCollect" lien="details" color=""/>
<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
  {#each [1,2,3,4,5,6,7,8,9,10] as index_}
    <CardMaque/>
  {/each}
</div> -->
<div class="mt-8">
</div>


