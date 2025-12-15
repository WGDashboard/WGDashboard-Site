<script setup>
import 'assets/css/main.css'
import Features from "~/components/features.vue";
import OperatingSystem from "~/components/operatingSystem.vue";
import ReachOut from "~/components/reachOut.vue";
import Sponsors from "~/components/sponsors.vue";



useSeoMeta({
	title: 'WGDashboard | Simple dashboard to manage WireGuard VPN',
	ogTitle: 'WGDashboard | Simple dashboard to manage WireGuard VPN',
	description: 'Manage your WireGuard VPN with ease',
	ogDescription: 'Manage your WireGuard VPN with ease',
	ogImage: 'https://wgdashboard-resources.tor1.cdn.digitaloceanspaces.com/Posters/Social-Preview.png',
})

import {store} from "~/stores/store.js";
import Modal from "~/components/modal.vue";
import ImageSlide from "~/components/imageSlide.vue";
import Stars from "~/components/stars.vue";
import Showcases from "~/components/showcases.vue";

const s = store();

onMounted(() => {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-BXCJGLTK17');


	document.querySelectorAll('.openInModal').forEach(x => {
		x.addEventListener('click', (e) => {
			if (x.attributes.href?.value){
				e.preventDefault();
				s.modalSrc = x.attributes.href.value;
				s.modal = true
			}
		})
	})
})
</script>
<template>
	<div data-bs-theme="dark" class="app position-relative">
		<Navbar></Navbar>

		<div class="d-flex flex-column gap-5 overflow-y-hidden contentContainer position-relative" style="z-index: 100">
			<div class="container blurIn position-relative">
				<div class="mb-5 d-flex flex-column align-items-center text-center d-flex flex-column gap-3"
				     style="margin-top: 8vh">
					<h1 class="display-1 fw-bold wgdLogo mb-0">
						WGDashboard
					</h1>
					<p class="text-muted mb-0">
						Made with Python, Vue.js and with <i class="bi bi-heart-fill mx-1"></i> since October 18, 2020
					</p>
					<a href="https://hitscounter.dev">
						<img src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fwgdashboard.dev&label=Visitors&icon=eye-fill&color=%23198754" alt="Visitor Count">
					</a>
					<a target="_blank"
					   href="https://docs.wgdashboard.dev/install/" class="btn bg-primary-subtle rounded-4 border-primary-subtle px-4 py-3 shadow fw-bold openInModal">
						<i class="bi bi-person-walking me-2"></i>
						Get Started
					</a>
				</div>
				<div class="mb-5 position-relative">
					<ImageSlide></ImageSlide>
				</div>
				<div class="d-flex align-items-center gap-2 flex-column flex-sm-row">
					<h5 class="fw-normal mb-sm-0 text-center text-sm-start">
						Want to try it out before you install?<br>
						<small class="text-muted">Username and password are <code>admin</code></small>
					</h5>
					<a href="https://demo.wgdashboard.dev"
					   target="_blank"
					   class="btn bg-primary-subtle rounded-4 border-primary-subtle ms-sm-auto px-4 py-3 shadow">
						Access Demo
					</a>
				</div>
			</div>
			<hr>
			<div class="container">
				<p class="">
					To help us better understand and improve WGDashboard’s performance, we’re launching the
				</p>
				<h1 class="mb-4">
					<strong>WGDashboard Testing Program</strong>
				</h1>
				<p>
					As part of this program, participants will receive free WireGuard VPN access to our server in <strong>Toronto, Canada</strong> hosting on <strong>DigitalOcean</strong>, valid for <strong>24 hours</strong> or up to <strong>1GB of total traffic</strong>—whichever comes first.
				</p>
				<p>
					Click the button below for more information.
				</p>
				<a href="https://wg.wgdashboard.dev"
				   target="_blank"
				   class="btn bg-primary-subtle rounded-4 border-primary-subtle ms-sm-auto px-4 py-3 shadow">
					Join WGD Testing Program
				</a>
				<div class="mt-4 text-muted">
					<small>Updated @ Oct 28, 2025</small>
				</div>
			</div>
			<hr>
			<div class="container d-flex flex-column gap-4 blurIn">
				<h1 class="display-5 fw-bold">So,<br>what is WGDashboard?</h1>
				<h4 class="fw-normal">
					WGDashboard is a simple and easy-to-use dashboard to manage your <strong>WireGuard & AmneziaWG VPN Server(s)</strong>.
				</h4>
				<hr>
				<Features></Features>
				<hr>
				<OperatingSystem></OperatingSystem>
			</div>
			<hr>
			<Stars style="z-index: 0"></Stars>
			<hr>
			<Showcases></Showcases>
			<hr>
			<Sponsors></Sponsors>


			<hr>
			<ReachOut></ReachOut>

			<div class="py-3">
				<div class="container text-center">
					<small class="text-muted">2020 - 2025  &copy;  WGDashboard</small>
				</div>
			</div>
		</div>
		<Transition name="fade">
			<Modal v-if="s.modal"></Modal>
		</Transition>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	position: absolute;
	opacity: 0;
	transform: scale(0.9);
	filter: blur(8px);
}
</style>
