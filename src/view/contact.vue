<template>
	<div class="">
		<top>
			<router-link to='chatList' slot="top-leftBtn"><iconSvg name="setting"></iconSvg>设置</router-link>
			<div class="" slot="top-center">
				联系人
			</div>
			<router-link slot="top-rightBtn" to=''>添加</router-link>
		</top>
		<searchBar></searchBar>
		<div class="menu">
			<ul>
				<li v-for="p in contact">
					{{ p.name }}
					<titleFriend :data='p.childrens' showDate='false' showRed='false' showLastChat='true'></titleFriend>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	import searchBar from '@components/search-bar'
	import top from '@components/top-bar'
	import titleFriend from '@components/title-friend'
	import iconSvg from '@components/icon-svg'
	
	export default {
		data(){
			return {
				contact: ''
			}
		},
		created(){
			this.$http.get('urlxxx').then(res => {
				if(res.status == '200'){
					this.contact = res.data
				}
			})
		},
		components:{
			searchBar,
			top,
			titleFriend,
			iconSvg
		}
	}
</script>

<style>
</style>