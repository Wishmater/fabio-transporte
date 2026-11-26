<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollPosition } from '$lib/client/stores/store';
	import { page } from '$app/stores';
	
	let isMenuOpen = false;

	const handleScroll = () => {
		$scrollPosition = $page.url.pathname === '/' ? window.scrollY : 1;
	};
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	$: $page.url.pathname, s();

	const s = () => {
		isMenuOpen = false;
		$scrollPosition = $page.url.pathname !== '/' ? 1 : 0;
	};

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	let logoutSubmitter: HTMLFormElement;
</script>

<nav
	class={`${$scrollPosition === 0 ? 'bg-transparent backdrop-filter-none' : 'bg-white/70 backdrop-blur shadow-lg'} transition-all duration-200 ease-in-out h-[86px] w-full py-2 fixed z-10`}
>
	<ul class="flex h-full justify-between items-center mx-8 md:mx-auto max-w-screen-2xl md:px-16">
		<a
			href="/"
			class={`transition-all duration-500 ease-in-out relative ${$scrollPosition === 0 ? 'h-full mb-0 xl:h-[250px] xl:mb-[-210px]' : 'h-full mb-0'} `}
			
			>
			<img
				class={`transition-all duration-500 ease-in-out ${$scrollPosition === 0 ? 'grayscale brightness-[3.8] mb-0 md:mt-0 h-full xl:h-[250px] xl:mb-[-210px]' : 'h-full mb-0'}`}
				src="/ctm-logo.svg"
				alt="Logo"
				title="Fabio Transporte SURL"
			/>
			<div class="transition-all duration-500 ease-in-out absolute left-0 right-0 top-0 bottom-0
									m-3 xl:m-10 bg-white rounded-full blur-md xl:blur-xl -z-10
					 				{$scrollPosition===0 ? 'opacity-75' : 'opacity-0'}">
			</div>
	</a>
	</ul>
</nav>
