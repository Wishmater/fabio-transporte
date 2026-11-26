<script>
	import { page } from '$app/stores';

	const types = {
		'404': {
			msg: 'La página que intenta acceder no existe',
			img: '/not_found.svg',
			textButton: 'Volver a la página principal',
			redirectTo: '/'
		},
		'500': {
			msg: 'Error en la petición al servidor',
			img: '/server_error.svg',
			textButton: 'Volver a la página principal',
			redirectTo: '/'
		}
	};
</script>

<div class="h-[calc(100vh-86px)] flex px-8">
	<div class="w-full flex flex-col items-center justify-center mx-auto max-w-screen-2xl gap-3">
		<img
			class="w-[400px]"
			src={types[$page.status].img}
			alt="Imagen de ruta no encontrada o error de la página"
		/>
		<div class="flex flex-col gap-3 items-center">
			<p>{types[$page.status].msg}</p>
			<a
				href={types[$page.status].redirectTo}
				class="bg-pantone text-white rounded-md h-[36.8px] px-5 text-sm transition-all flex justify-center items-center w-fit hover:bg-white hover:outline-1 hover:outline-pantone hover:text-pantone hover:outline active:scale-95 font-light hover:font-normal uppercase"
			>
				<p>{types[$page.status].textButton}</p>
			</a>
		</div>
	</div>
</div>
