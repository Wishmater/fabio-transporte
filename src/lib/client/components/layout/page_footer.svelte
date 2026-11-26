<script lang="ts">
	import { FOOTER_SECTIONS_DATA } from '$lib/client/utils/data_ui';
</script>

<footer
	class="md:h-62 h-screen md:h-full md:bg-[url('/ship-horizontal-footer.webp')] bg-[url('/ship-vertical-footer-mobile.webp')] bg-cover"
>
	<div class="backdrop-brightness-50">
		<div
			class="h-screen md:justify-between flex flex-col md:flex-row md:items-start py-11 px-16 md:gap-8 gap-16 md:h-auto items-center justify-evenly mx-auto max-w-screen-2xl"
		>
			<section class="flex flex-col gap-2 text-center md:text-start">
				<header class="md:text-xl font-bold uppercase text-white">
					FABIO TRANSPORTE SURL
				</header>
				<ul class="flex flex-col gap-2 text-white">
					<li class="flex flex-col items-center md:flex-row gap-3 text-sm">
						<img class="w-6" src='/others/icon_location.svg' alt='Icono de ubicación' />
						<p><a href="https://maps.app.goo.gl/r9K2PFAkNh1bVBM68">Hacendado #285, Via Blanca, Habana Vieja, La Habana.</a> </p>
					</li>
					<li class="flex flex-col items-center md:flex-row gap-3 text-sm">
						<img class="w-6" src='/others/icon_mail.svg' alt='Icono de correo' />
						<p><a href="mailto:fabiotransporte554@gmail.com">Enviar correo</a></p>
					</li>
					<li class="flex flex-col items-center md:flex-row gap-3 text-sm">
						<img class="w-6" src='/others/icon_whatsapp.png' alt='Icono de whatsapp' />
						<p><a href="https://wa.me/5355150045">Chatear por whatsapp</a></p>
					</li>
					<li class="flex flex-col items-center md:flex-row gap-3 text-sm">
						<img class="w-6" src='/others/icon_phone_callback.svg' alt='Icono de llamada' />
						<p><a href="tel:+5363518642"  data-rel="external">Llámenos...</a></p>
					</li>
					<li class="flex flex-col items-center md:flex-row gap-3 text-sm">
						<img class="w-6" src='/others/icon_phone_callback.svg' alt='Icono de llamada' />
						<p><a href="tel:+5354494608"  data-rel="external">Llámenos...</a></p>
					</li>
				</ul>
			</section>			
			<section class="flex flex-col gap-2 text-center md:text-start md:w-auto w-full">
				<header class="md:text-xl font-bold uppercase text-white">Encuéntranos</header>
				<ul class="flex gap-[11px] text-white justify-center">
					{#each FOOTER_SECTIONS_DATA.section2 as data}
						<li class="w-7">
							<img src={data.iconPath} alt="@" class="w-6" />
						</li>
					{/each}
				</ul>
			</section>
		</div>
	</div>
</footer>
