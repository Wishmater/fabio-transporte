<script lang="ts">
	import ActionsHome from '$lib/client/components/actions-home.svelte';
	import { DATA_HOME_CARDS} from '$lib/client/utils/data_ui';
</script>

<section class="bg-pantone h-screen flex justify-center items-center">
	<img
		class="w-full object-cover h-full brightness-[1.2]"
		src="/ship-vertical-original.webp"
		alt="Imagen con camion en el puerto"
	/>
	<div
		class="absolute flex flex-col xl:mt-32 xl:flex-row gap-16 justify-between w-full md:px-12 lg:px-16 items-center mx-auto max-w-screen-2xl"
	>
		<div class="h-40 w-full px-8 sm:w-auto md:p-0">
			<ActionsHome />
		</div>
	</div>
</section>
<section class="px-8 py-10 md:p-16 flex grow flex-col gap-10 mx-auto max-w-screen-2xl">
	<div class="flex flex-col gap-10 md:flex-row">
			<article
				class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]
				"
			>
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-8" src='/others/icon_mision.svg' alt='Icono de una hoja con una estrella' />
					<div class="flex-1 text-blue-800">MISIÓN</div>
				</div>
				<div class="text-sm md:leading-7">
					Somos una empresa de transporte que ofrece servicios las 24 horas del día, brindando total confiabilidad, garantía y privacidad para el cliente, trasladando mercancías y cargas pesadas proporcionando soluciones específicas al cliente.
				</div>
				<div class="logo mt-10 ml-28">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
				</div>
			</article>
			<article
				class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]
				"
			>
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-8" src='/others/icon_vision.svg' alt='Icono de una hoja con una estrella' />
					<div class="flex-1 text-blue-800">VISIÓN</div>
				</div>
				<div class="text-sm md:leading-7">
					Ofrecer total confiabilidad, seguridad y puntualidad. Trabajar en base al continuo crecimiento de la empresa, usar tecnología de punta y satisfacer las necesidades e intereses del cliente para seguir contando con su preferencia.
				</div>
				<div class="logo mt-4 ml-28">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
				</div>
			</article>
			<article
				class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]
				"
			>
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-8" src='/others/icon_origin.svg' alt='Icono de una hoja con una estrella' />
					<div class="flex-1 text-blue-800">OBJETIVO ESTRATÉGICO</div>
				</div>
				<div class="text-sm md:leading-7">
					Realizar la distribución de la mercancía garantizando la entrega con puntualidad y profesionalidad, contando con todos los parámetros a seguir para garantizar la satisfacción del cliente. Nuestro personal profesional está capacitado, marcando la diferencia de la competencia.
				</div>
				<div class="logo mt-10 ml-36">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
				</div>
			</article>
	</div>
	<article class="rounded-md p-10 flex flex-col bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
		<div class="flex text-6xl gap-3 font-bold mt-3">
			<img class="w-48" src='/ctm-logo.svg' alt='Icono de servicios' />
			<div class="md:text-6xl font-bold uppercase text-blue-800  mt-12">SERVICIOS</div>
		</div>	
	</article>
		<div class="flex flex-col gap-10 md:flex-row">			
			<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de alquiler' />
					<div class="flex-1 text-blue-800 mt-8">ALQUILER</div>
				</div>				
				<div class="text-sm md:leading-7">
					Almacenes (depósitos)
				</div>
				<div class="text-sm md:leading-7">
					Congeladores
				</div>
				<div class="text-sm md:leading-7">
					Contenedores de almacenamiento
				</div>
				<div class="text-sm md:leading-7">
					Garajes
				</div>
				<div class="text-sm md:leading-7">
					Vagones de carga
				</div>
				<div class="text-sm md:leading-7">
					Vehículos
				</div>
				<div class="logo mt-64 ml-16">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
				</div>
			</article>
			<article
				class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]
				"
			>
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
					<div class="flex-1 text-blue-800  mt-8">TRANSPORTE</div>
				</div>
				<div class="text-sm md:leading-7">
					Muebles
				</div>
				<div class="text-sm md:leading-7">
					Objetos de valor
				</div>
				<div class="text-sm md:leading-7">
					Documentos jurídicos
				</div>
				<div class="text-sm md:leading-7">
					En automóvil
				</div>
				<div class="text-sm md:leading-7">
					Camionaje
				</div>
				<div class="text-sm md:leading-7">
					Corretaje de fletes
				</div>
				<div class="text-sm md:leading-7">
					Corretaje de transporte
				</div>
				<div class="text-sm md:leading-7">
					Descarga de mercancías
				</div>
				<div class="text-sm md:leading-7">
					Distribución de mensajes
				</div>
				<div class="text-sm md:leading-7">
					Distribucion de paquetes
				</div>
				<div class="text-sm md:leading-7">
					Empaquetado de mercancías y productos
				</div>
				<div class="text-sm md:leading-7">
					Entrega de flores
				</div>
				<div class="text-sm md:leading-7">
					Estiba
				</div>
				<div class="text-sm md:leading-7">
				    Flete
				</div>
				<div class="logo mt-8 ml-24">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
				</div>
			</article>
			<article
				class="p-10 h-auto flex flex-col bg-[#fff] bg-local-'/ctm-logo.svg' rounded-md shadow-[0_0_5px_0px_#cecece]
				"
			>
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de logística' />
					<div class="flex-1 text-blue-800 mt-8">LOGÍSTICA</div>
				</div>
				<div class="text-sm md:leading-7">
					Almacenamiento de mercancías
				</div>
				<div class="text-sm md:leading-7">
					Autobuses
				</div>
				<div class="text-sm md:leading-7">
					Remolques
				</div>
				<div class="text-sm md:leading-7">
					Remolque de vehículos averiados
				</div>
				<div class="text-sm md:leading-7">
					Mudanzas
				</div>
				<div class="text-sm md:leading-7">
				    Reparto de mercancías
				</div>
				<div class="text-sm md:leading-7">
				    Reparto de mercancías encargadas por correspondencia
				</div>
				<div class="text-sm md:leading-7">
					Localización y seguimiento
					<div class="text-sm md:leading-7">
						&emsp;-Mercancía para su transporte
					</div>
					<div class="text-sm md:leading-7">
						&emsp;-Personas para su transporte
					</div>
				</div>
				<div class="logo mt-36 ml-36">
					<img class="w-24" src='/ctm-logo.svg' alt='Icono de transporte' />
				</div>
			</article>
	    </div>

	<article class="rounded-md p-10 flex flex-col bg-[#fff] shadow-[0_0_5px_0px_#cecece] ">
		<div class="flex text-9xl gap-3 font-bold mb-3">
			<img class="w-48" src='/ctm-logo.svg' alt='Icono de servicios' />
			<div class="md:text-6xl font-bold uppercase text-blue-800  mt-12">EQUIPOS</div>
		</div>
	</article>

	<div class="flex flex-col gap-10 md:flex-row">
			<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-96" src='/others/camion-puerto-mariel.jpg' alt="Camion puerto"/>
				</div>
			</article>
			<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-96" src='/others/camion_almacen.jpg' alt="Camion almacen"/>
				</div>
			</article>
			<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
				<div class="flex gap-3 mb-3 text-xl font-bold">
					<img class="w-96" src='/others/grua_carga.jpg' alt="Grua carga"/>
				</div>
			</article>
	</div>
	<div class="flex flex-col gap-10 md:flex-row">
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/grua_puerto.jpg' alt="Grua puerto"/>
			</div>
		</article>
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/montacarga.jpg' alt="Montacarga"/>
			</div>
		</article>
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/camion-vacio.jpg' alt="Camion vacio"/>
			</div>
		</article>
	</div>
	<div class="flex flex-col gap-10 md:flex-row">
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/fabio1.jpg' alt="Grua puerto"/>
			</div>
		</article>
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/fabio2.jpg' alt="Montacarga"/>
			</div>
		</article>
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/fabio3.jpg' alt="Camion vacio"/>
			</div>
		</article>
	</div>
	<div class="flex flex-col gap-10 md:flex-row">
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/fabio4.jpg' alt="Grua puerto"/>
			</div>
		</article>
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/fabio5.jpg' alt="Montacarga"/>
			</div>
		</article>
		<article class="p-10 h-auto flex flex-col rounded-md bg-[#fff] shadow-[0_0_5px_0px_#cecece]">
			<div class="flex gap-3 mb-3 text-xl font-bold">
				<img class="w-96" src='/others/fabio6.jpg' alt="Camion vacio"/>
			</div>
		</article>
	</div>

	<!-- Nueva sección comercial: venta de combustibles -->
	<section
		id="combustibles"
		class="scroll-mt-24 mt-12 rounded-2xl bg-white p-5 shadow-[0_0_12px_0px_#cecece] md:p-10"
		aria-labelledby="combustibles-title"
	>
		<div class="mx-auto flex max-w-6xl flex-col items-center gap-7">
			<div class="text-center">
				<p class="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-red-700">
					Nuevo servicio
				</p>
				<h2 id="combustibles-title" class="text-3xl font-extrabold uppercase text-blue-900 md:text-5xl">
					Venta de gasolina y diésel
				</h2>
				<p class="mt-3 text-base text-slate-700 md:text-lg">
					Habana Nueva, Guanabacoa, La Habana
				</p>
			</div>

			<img
				class="h-auto w-full max-w-5xl rounded-xl shadow-lg"
				src="/others/anuncio-gasolina-diesel.webp"
				alt="Venta de gasolina y diésel en Habana Nueva, Guanabacoa. Compra mínima de 100 litros. Somos MIPYME y damos factura. Teléfono 55150045."
				loading="lazy"
				decoding="async"
			/>

			<div class="grid w-full max-w-4xl gap-4 text-center sm:grid-cols-3">
				<div class="rounded-xl bg-slate-50 p-5">
					<p class="text-sm font-semibold uppercase tracking-wide text-slate-500">Ubicación</p>
					<p class="mt-2 font-bold text-blue-900">Habana Nueva, Guanabacoa</p>
				</div>
				<div class="rounded-xl bg-slate-50 p-5">
					<p class="text-sm font-semibold uppercase tracking-wide text-slate-500">Compra mínima</p>
					<p class="mt-2 text-2xl font-extrabold text-blue-900">100 litros</p>
				</div>
				<div class="rounded-xl bg-slate-50 p-5">
					<p class="text-sm font-semibold uppercase tracking-wide text-slate-500">Documentación</p>
					<p class="mt-2 font-bold text-blue-900">Damos Factura</p>
				</div>
			</div>

			<div class="flex flex-col items-center gap-4 text-center">
				<p class="font-bold text-blue-900">Somos MIPYME</p>
				<a
					href="tel:+5355150045"
					class="inline-flex min-h-14 items-center justify-center rounded-full bg-red-700 px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
					aria-label="Llamar al 55150045"
				>
					☎&nbsp; Llamar ahora: 55150045
				</a>
			</div>
		</div>
	</section>

</section>
