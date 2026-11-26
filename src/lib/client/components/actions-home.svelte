<!-- <script lang="ts">
	import { LIST_TABS_ACTION_HOME } from '$lib/client/utils/data_ui';

	let sectionList = [true, false, false];

	const selectItem = (index: number) => {
		for (let i = 0; i < LIST_TABS_ACTION_HOME.length; i++) {
			LIST_TABS_ACTION_HOME[i].selected = false;
			sectionList[i] = false;
		}
		LIST_TABS_ACTION_HOME[index].selected = true;
		sectionList[index] = LIST_TABS_ACTION_HOME[index].selected;
	};
</script>
<article class="flex flex-col sm:w-[460px] h-max rounded-md bg-white relative">
	<ul class="flex px-4 md:px-8 pt-6 md:pt-8 justify-between">
		{#each LIST_TABS_ACTION_HOME as item, index}
			<button
				on:click={() => selectItem(index)}
				class={`${item.selected ? 'bg-pantone/10' : ''} transition-all text-pantone hover:bg-pantone/10 cursor-pointer text-sm md:text-base px-1 xxs:px-3 py-1 rounded-md`}
			>
				{item.label}
			</button>
		{/each}
	</ul>
	{#if sectionList[0]}
		<section class="flex left-0 pb-6 md:pb-8 pt-6 px-6 md:px-8 flex-col gap-6 w-full top-14">
			<div class="relative w-full flex items-center gap-1 group border-b">
				<svg class="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0F4366"
					><path
						d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
					/></svg
				>
				<input
					class="outline-none py-2 w-full flex items-center text-xs md:text-base"
					type="text"
					placeholder="Ingrese un ID para el seguimiento"
				/>
				<div
					class="after:content-[''] after:absolute after:bg-pantone after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all group-focus-within:after:w-full"
				></div>
			</div>
			<button
				class="bg-pantone p-2 md:p-3 text-white text-sm md:text-base rounded-md w-24 transition-all hover:bg-white hover:outline-1 hover:outline-pantone hover:text-pantone hover:outline active:scale-95 uppercase"
				>Seguir</button
			>
		</section>
	{:else if sectionList[1]}
		<section class="flex left-0 pb-6 md:pb-8 pt-6 px-6 md:px-8 flex-col w-full top-14">
			<div class="relative w-full flex items-center gap-2 group border-b mb-4">
				<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#0F4366"
					><path
						d="m720-440-56-56 86-86q-43-8-137.5 9T400-441q32-117 129-188t219-71l-84-84 56-56 200 200-200 200ZM480-80Q319-217 239.5-334.5T160-552q0-136 93-232t227-96q35 0 70 7.5t67 22.5l-62 62q-18-6-37-9t-38-3q-101 0-170.5 72.5T240-552q0 71 59 162t181 203q60-55 105-105t74-96l58 58q-40 59-99 121T480-80Z"
					/></svg
				>

				<input
					class="outline-none py-2 w-full flex items-center text-xs md:text-base"
					type="text"
					placeholder="Origen"
				/>
				<div
					class="after:content-[''] after:absolute after:bg-pantone after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all group-focus-within:after:w-full"
				></div>
			</div>
			<svg class="self-center" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0F4366"
				><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" /></svg
			>
			<div class="relative w-full flex items-center gap-2 group border-b mb-8">
				<svg class="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0F4366"
					><path
						d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
					/></svg
				>
				<input
					class="outline-none py-2 w-full flex items-center text-xs md:text-base"
					type="text"
					placeholder="Destino"
				/>
				<div
					class="after:content-[''] after:absolute after:bg-pantone after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all group-focus-within:after:w-full"
				></div>
			</div>
			<button
				class="bg-pantone p-2 md:p-3 text-white text-sm md:text-base rounded-md w-24 transition-all hover:bg-white hover:outline-1 hover:outline-pantone hover:text-pantone hover:outline active:scale-95 uppercase"
				>Buscar</button
			>
		</section>
	{:else if sectionList[2]}
		<section class="flex left-0 pb-6 md:pb-8 pt-6 px-6 md:px-8 flex-col gap-6 w-full top-14">
			<div class="relative w-full flex items-center gap-1 group border-b">
				<svg class="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0F4366"
					><path
						d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
					/></svg
				>
				<input
					class="outline-none py-2 w-full flex items-center text-xs md:text-base"
					type="text"
					placeholder="Ingrese país/región"
				/>
				<div
					class="after:content-[''] after:absolute after:bg-pantone after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all group-focus-within:after:w-full"
				></div>
			</div>
			<button
				class="bg-pantone p-2 md:p-3 text-white rounded-md w-24 transition-all text-sm md:text-base hover:bg-white hover:outline-1 hover:outline-pantone hover:text-pantone hover:outline active:scale-95 uppercase"
				>Buscar</button
			>
		</section>
	{/if}
</article> -->
