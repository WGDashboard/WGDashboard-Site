<script setup lang="ts">

</script>

<template>
<div class="d-flex gap-3 flex-column">
	<h4 class="fw-normal">
		What is it good at? This!
	</h4>
	<div class="d-flex gap-4 mb-2">
		<div>
			<h1>
				<i class="bi-1-circle-fill"></i>
			</h1>
		</div>
		<div>
			<h5>
				Seamless integration with existing WireGuard & AmneziaWG configurations
			</h5>
			<p class="text-muted mb-0">
				It will automatically look for existing configurations under <code>/etc/wireguard</code> & <code>/etc/amnezia/amneziawg</code>
			</p>
		</div>
	</div>
	<div class="d-flex gap-4 mb-2">
		<div>
			<h1>
				<i class="bi-2-circle-fill"></i>
			</h1>
		</div>
		<div>
			<h5>
				Simple UI with Multi-Factor Authentication (MFA/2FA) verification
			</h5>
			<p class="text-muted mb-0">
			You will only see the most important information on the UI;<br>
			Optional MFA-verification with TOTP, works with most authenticator apps on the market.
			</p>
		</div>
	</div>
	<div class="d-flex gap-4 mb-2">
		<div>
			<h1>
				<i class="bi-3-circle-fill"></i>
			</h1>
		</div>
		<div>
			<h5>
				Manage configurations and peers
			</h5>
			<ul>
				<li>Add single or multiple peers with auto-generated information</li>
				<li>Edit peer information</li>
				<li>Restrict / Delete peers</li>
				<li>Share peer QR code, an URL or Email</li>
				<li>Schedule jobs to delete / restrict peer when set conditions are met</li>
			</ul>
		</div>
	</div>
	<div>
		<h5>
			... and much much more! Try it out and discover it yourself!
		</h5>
	</div>
</div>
</template>

<style scoped>

</style>
