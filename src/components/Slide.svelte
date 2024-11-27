<script>
    import { onMount } from 'svelte';
  
    let activeSlide = 0;
    const slides = [
      {
        img: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg',
        title: 'First slide label',
        text: 'Some representative placeholder content for the first slide.'
      },
      {
        img: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
        title: 'Second slide label',
        text: 'Some representative placeholder content for the second slide.'
      },
      {
        img: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg',
        title: 'Third slide label',
        text: 'Some representative placeholder content for the third slide.'
      }
    ];
  
    const nextSlide = () => {
      activeSlide = (activeSlide + 1) % slides.length;
    };
  
    const prevSlide = () => {
      activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    };
  
    // Auto-slide function
    const autoSlide = () => {
      setInterval(() => {
        nextSlide();
      }, 6000); // Change slide every 3 seconds
    };
  
    onMount(() => {
      autoSlide(); // Start the auto-slide when component mounts
    });
</script>
  
<div class="relative mt-[5.5rem] rounded-md" id="carouselExampleCaptions">
  <div class="w-full relative rounded-md overflow-hidden">
    {#each slides as slide, index}
      <div class={`relative float-left w-full transition-transform duration-600 ease-in-out rounded-md ${
        activeSlide === index ? '' : 'hidden'
      }`}>
        <!-- Conteneur de l'image -->
        <div class="flex items-center justify-center h-[250px] sm:h-[300px] md:h-[400px] rounded-md">
          <img 
            src={slide.img} 
            class="block w-full h-full object-cover rounded-md" 
            alt={`Slide ${index + 1}`} 
          />
        </div>
        <!-- Texte du slide -->
        <div class="absolute inset-x-[5%] sm:inset-x-[10%] md:inset-x-[15%] bottom-5 py-3 text-center text-white bg-black/50 rounded-md md:py-5">
          <h5 class="text-base sm:text-lg md:text-xl font-semibold">{slide.title}</h5>
          <p class="text-sm sm:text-base">{slide.text}</p>
        </div>
      </div>
    {/each}
  </div>
<!-- </div> -->

  
  <!--   <button class="absolute left-0 top-0 bottom-0 z-10 w-[15%] text-white opacity-50" on:click={prevSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>cc
  
    <button class="absolute right-0 top-0 bottom-0 z-10 w-[15%] text-white opacity-50" on:click={nextSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button> -->
</div>

<style>
  /* Tu peux ajouter d'autres styles personnalisés ici si nécessaire */
</style>
