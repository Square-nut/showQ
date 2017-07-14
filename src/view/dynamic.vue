<template>
	<div class="">
		<top></top>
		<searchBar></searchBar>
		<div class="list">
			<router-link to="">
				<iconSvg name="icon-qzone"></iconSvg>
			</router-link>
			<router-link to="">
				<iconSvg name="icon-location"></iconSvg>
			</router-link>
			<router-link to="">
				<iconSvg name="icon-buluo"></iconSvg>
			</router-link>
		</div>
	</div>
</template>

<script>
	import searchBar from '@components/search-bar'
	import top from '@components/top-bar'
	import iconSvg from '@components/icon-svg'
	export default {
		data(){
			return{}
		},
		components:{
			iconSvg,
			top,
			searchBar
		}
	}
</script>

<style>
</style>