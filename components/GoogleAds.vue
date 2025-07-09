<script setup>
const props = defineProps(['width', 'height'])

onMounted(() => {
	if (import.meta.client && window.adsbygoogle) {
		try {
			(adsbygoogle = window.adsbygoogle || []).push({});
			console.log("Loaded GoogleAds")
		} catch (e) {
			console.error('AdSense error:', e);
		}
	}
})
</script>

<template>
	<div>
		<ins class="adsbygoogle"
		     style="display:block"
		     :style="{width: width, height: height}"
		     data-ad-client="ca-pub-2283617751904576"
		     data-ad-slot="4115572421"></ins>
	</div>
</template>

<style scoped>

</style>