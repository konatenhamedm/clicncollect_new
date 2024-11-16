<script lang="ts">
   
	import '../app.css';
    import { onMount } from 'svelte';
  import Header from '../components/header/Header.svelte';
  import Footer from '$components/footer/Footer.svelte';
	import { page } from '$app/stores';
  import Side from '$components/_includes/Side.svelte';
  import HeaderMain from '$components/_includes/HeaderMain.svelte';
  import Modale from '$components/_includes/Modale.svelte';
  import FooterMain from '$components/_includes/FooterMain.svelte';


</script>
{#if $page.url.pathname.startsWith('/admin')  }
<div id="preloader" class="bg-white dark:bg-[#242424] p-0 m-0 h-full fixed z-[99999] w-full flex items-center justify-center">
	<div class="lds-ripple inline-block relative w-20 h-20">
		<div></div>
		<div></div>
	</div>
</div>
<!-- Preloader end -->
<div id="main-wrapper">
	<main>
		<HeaderMain />
		<Side />
		<div class="content-body"  style="min-height: 919px;">
			<slot />
		</div>
		<Modale />
		<FooterMain />
	</main>
</div>
{:else}
<Header />
<div class="mx-auto bg-white   ">
    <div class="text-neutral-800  relative overflow-hidden flex flex-col justify-around w-full   bg-white  px-4">
        <slot />
    </div>
</div>
<Footer />
{/if}
