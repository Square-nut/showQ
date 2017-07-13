<template>
	<div id="">
		<div class="main">
			<router-view></router-view>
		</div>
		<navigate></navigate>
	</div>
</template>

<script>
	import navigate from '@components/nav'
	
	export default {
		components:{
			navigate
		}
	}
</script>

<style>
</style>