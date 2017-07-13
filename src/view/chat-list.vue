<template>
	<div class="">
		<top></top>
		<searchBar></searchBar>
		<div class="list">
			<titleFriend :data='chatList' showDate='true' showRed='false' showLastChat='true'></titleFriend>
		</div>
	</div>
</template>

<script>
	import searchBar from '@components/search-bar'
	import top from '@components/top-bar'
	import titleFriend from '@components/title-friend'
	
	let mock = [{ 
		src:'xxxx',
		name: '好友',
		date: '02-01',
		chat: '天好热啊'
	}]
	export default {
		data(){
			return {
				hasInfo: false,
				chatList: mock
			}
		},
		create(){
			this.$http.get('getChatList').then(res => {
				if(res.status == "200"){
					this.chatList = res.data
				}
			})
		},
		methods:{
		},
		components:{
			searchBar,
			top,
			titleFriend
		}
	}
</script>

<style scoped>
	.title{
		cursor: pointer;
	}
</style>