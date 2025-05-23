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
</script>
<template>
	<div data-bs-theme="dark" class="app">
		<Navbar></Navbar>
		<div class="d-flex flex-column gap-5 overflow-y-hidden contentContainer">
			<div class="container blurIn">
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

					<a target="_blank" href="https://docs.wgdashboard.dev/install.html" class="btn bg-primary-subtle rounded-4 border-primary-subtle px-4 py-3 shadow fw-bold">
						<i class="bi bi-person-walking me-2"></i>
						Get Started
					</a>
				</div>
				<div class="mb-5 position-relative">
					<NuxtImg
						class="w-100 rounded-4"
						v-slot="{ src, isLoaded, imgAttrs }"
						preload
						:custom="true"
						src="https://wgdashboard-resources.tor1.cdn.digitaloceanspaces.com/Documentation%20Images/index.png" alt="WGDashboard Index Screenshot">
						<transition name="fade" >
							<img
								v-if="isLoaded"
								v-bind="imgAttrs"
								:src="src"
								class="blurIn"
								alt="">
							<div
								v-else
								class="w-100 rounded-4 border border-1"
								style="padding-top: 56.22%;"
							>
							</div>
						</transition>
					</NuxtImg>
				</div>

				<div class="d-flex align-items-center gap-2 flex-column flex-sm-row">
					<h5 class="fw-normal mb-sm-0 text-center text-sm-start">
						Want to try it out before install?<br>
						<small class="text-muted">Username and password as <code>admin</code></small>
					</h5>
					<a href="https://demo.wgdashboard.dev"
					   target="_blank"
					   class="btn bg-primary-subtle rounded-4 border-primary-subtle ms-sm-auto px-4 py-3 shadow">
						Access Demo
					</a>
				</div>
			</div>
			<hr>
			<div class="container d-flex flex-column gap-4 blurIn">
				<h1 class="display-5 fw-bold">So,<br>what is WGDashboard?</h1>
				<h4 class="fw-normal">
					WGDashboard is a simple and easy-to-use dashboard to manager your <strong>WireGuard & AmneziaWG VPN</strong>.
				</h4>
				<hr>
				<Features></Features>
				<hr>
				<OperatingSystem></OperatingSystem>
			</div>

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
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease;

}

.fade-enter-from,
.fade-leave-to {
	position: absolute;
	opacity: 0;
	filter: blur(8px);
}
</style>
