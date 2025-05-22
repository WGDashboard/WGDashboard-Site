<script setup lang="ts">

</script>

<template>
	<nav class="navbar navbar-expand">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="https://wgdashboard-resources.tor1.cdn.digitaloceanspaces.com/Logos/Logo-2-Rounded-128x128.png" alt="WGDashboard-Logo" width="30">
			</a>
			<ul class="navbar-nav ms-auto ">
				<li class="nav-item">
					<a class="nav-link"
					   target="_blank"
					   aria-label="Documentation"
					   href="https://donaldzou.dev/WGDashboard-Documentation/index_topic.html">
						<i class="bi bi-book-fill me-2"></i>
						<span>Documentation</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
					   target="_blank"
					   aria-label="GitHub"
					   href="https://github.com/donaldzou/WGDashboard">
						<i class="bi bi-github me-2"></i>
						<span>GitHub</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link"
					   target="_blank"
					   aria-label="Merch from WGDashboard"
					   href="https://merch.wgdashboard.dev">
						<i class="bi bi-tag-fill me-2"></i>
						<span>Merch</span>
					</a>
				</li>

			</ul>
		</div>
	</nav>
</template>

<style scoped>
.nav-link{
	color: var(--bs-body-color)
}

@media screen and (max-width: 576px) {
	.nav-link span{
		display: none;
	}
}
</style>