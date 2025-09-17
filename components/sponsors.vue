<script setup lang="ts">

import Stars from "~/components/stars.vue";

const githubSponsors = ref([])
$fetch("/api/sponsors").then(res => {
	githubSponsors.value = res.data.user.sponsorshipsAsMaintainer.nodes
})
const otherSponsors = [
	"mondster2170"
]
</script>

<template>
	<div class="container d-flex flex-column gap-4 blurIn">
		<h1 class="display-5 fw-bold">This project is sponsored by</h1>
		<a href="https://m.do.co/c/a84cb9aac585">
			<img
				alt="DigitalOcean Logo"
				width="300px"
				src="/DO_Logo_Horizontal_Blue.png">
		</a>
		<h4 class="fw-normal">
			and
		</h4>
		<div class="d-flex gap-2 align-items-center" style="flex-wrap: wrap">
			<div v-for="u in githubSponsors"
			     class="d-inline-block  shadow">
				<a :href="'https://github.com/' + u.sponsorEntity.login">
					<img alt="icon"
					     class="border"
					     :src="u.sponsorEntity.avatarUrl"
					     style="border-radius: 100%; width: 70px; height: 70px">
				</a>
			</div>
			<div v-for="sponsor in otherSponsors" class="d-inline-block border-white border d-flex rounded-4 p-3" style=" height: 70px;">
				<span class="m-auto">
					@{{ sponsor }}
				</span>
			</div>
		</div>
		<h4 class="fw-normal">
			<strong>Thank you all!</strong>
		</h4>
		<hr>
		<h1 class="display-5 fw-bold">If you would also like to support this project</h1>
		<h4 class="fw-normal">
			You can do it via
		</h4>
		<div class="row g-2">
			<div class="col-sm">
				<a href="https://github.com/sponsors/donaldzou"
				   target="_blank" class="card rounded-4 shadow">
					<div class="card-body text-center p-4">
						<h1>
							<i class="bi bi-github"></i>
						</h1>
						<h5 class="mb-0">
							GitHub Sponsors
						</h5>
					</div>
				</a>
			</div>
			<div class="col-sm">
				<a href="https://buymeacoffee.com/donaldzou"
				   target="_blank" class="card rounded-4 shadow">
					<div class="card-body text-center p-4">
						<h1>
							<i class="bi bi-cup-fill"></i>
						</h1>
						<h5 class="mb-0">
							Buy Me a Coffee
						</h5>
					</div>
				</a>
			</div>
			<div class="col-sm">
				<a href="https://patreon.com/c/DonaldDonnyZou/membership"
				   target="_blank" class="card rounded-4 shadow">
					<div class="card-body text-center p-4">
						<h1>
							<i class="bi bi-bell-fill"></i>
						</h1>
						<h5 class="mb-0">
							Patreon
						</h5>
					</div>
				</a>
			</div>
			<div class="col-sm">
				<a href="https://www.paypal.me/donaldzou"
				   target="_blank" class="card rounded-4 shadow">
					<div class="card-body text-center p-4">
						<h1>
							<i class="bi bi-paypal"></i>
						</h1>
						<h5 class="mb-0">
							PayPal
						</h5>
					</div>
				</a>
			</div>

		</div>
		<h4 class="fw-normal">
			Thank you in advance!
		</h4>
	</div>
</template>

<style scoped>

</style>