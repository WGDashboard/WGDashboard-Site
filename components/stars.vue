<script setup lang="ts" async>
import { Line } from 'vue-chartjs'
import {
	Chart,
	LineElement,
	BarElement,
	BarController,
	LineController,
	LinearScale,
	Legend,
	Title,
	Tooltip,
	CategoryScale,
	PointElement,
	Filler
} from 'chart.js';

Chart.register(
	LineElement,
	BarElement,
	BarController,
	LineController,
	LinearScale,
	Legend,
	Title,
	Tooltip,
	CategoryScale,
	PointElement,
	Filler
);
const starsData: Ref = ref({
	keys: [],
	values: []
})

const chartOption = computed(() => {
	return {
		responsive: true,
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			x: {
				border: {
					display: true
				},
				ticks: {
					display: false,
					color: '#ffffff'
				},
				grid: {
					display: false
				},
			},
			y:{
				ticks: {
					display: false,
				},
				grid: {
					display: false
				},
			}
		}
	}
})

const chartKeys = computed(() => {
	return {
		labels: [...starsData.value.keys],
		datasets: [
			{
				data: [...starsData.value.values],
				borderColor: '#ffffff',
				backgroundColor: '#ffffff30',
				fill: 'start',
				pointRadius: 0,
				borderWidth: 3,
			}
		]
	}
})

onMounted(async () => {
	await useFetch('/api/starsHistory').then(d => {
		starsData.value = d.data.value
	})
})



</script>

<template>
<div class="chart w-100 position-relative container">
	<div class="position-absolute top-0 start-0 w-100 h-100 z-3">
		<h1 class="display-5 fw-bold ">
			<span class="wgdLogo fw-bold">
				{{ chartKeys.datasets[0].data[chartKeys.datasets[0].data.length - 1] }}
			</span> GitHub Stars
		</h1>
		<h4 class="fw-normal">
			since December 16th, 2020
		</h4>
	</div>
	<Line
		style="width: 100%; height: 400px;"
		class=" z-1"
		:options="chartOption"
		:data="chartKeys"
	></Line>
</div>
</template>

<style scoped>

</style>