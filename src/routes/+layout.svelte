<script lang="ts">
   
	import '../app.css';
    import { onMount } from 'svelte';
  import Header from '../components/header/Header.svelte';
  import Footer from '$components/footer/Footer.svelte';

</script>
<Header />
<div class="mx-auto bg-white   ">
    <div class="text-neutral-800  relative overflow-hidden flex flex-col justify-around w-full   bg-white  px-4">
        <slot />
    </div>
</div>
<Footer />