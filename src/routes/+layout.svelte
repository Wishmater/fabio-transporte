<script lang="ts">
	import '../app.css';
	import PageHeader from '$lib/client/components/layout/page_header.svelte';
	import PageFooter from '$lib/client/components/layout/page_footer.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Fabio Transporte SURL</title>
</svelte:head>
<section class="flex flex-col font-display min-h-screen relative">
	<header>
		<PageHeader/>
	</header>
	<main class={`${$page.url.pathname !== '/' ? 'pt-[86px]' : ''} grow`}>
		<div class="bg-[url('/pattern.svg')]">
			<slot />
		</div>
	</main>
	<footer>
		<PageFooter />
	</footer>
</section>
