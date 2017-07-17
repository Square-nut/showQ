<template>
	<div>
		<top>
			<router-link slot="top-leftBtn" to='/chatList'>返回</router-link>
			<div class="" slot="top-center">
				我的好友
			</div>
			<router-link slot="top-rightBtn" to=''>好友信息</router-link>
			<!--<div slot=""></div>-->
		</top>
		<searchBar></searchBar>
		<div class="talk-history">
			<div class="title" :class="isMine" v-for="v in chatInfo">
				<div class="time" v-if="">
					{{ v.time }}
				</div>
				<div class="headIcon">
					<img :src="v.headIcon"/>
				</div>
				<div class="chatText">
					<p>{{ v.msg }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import searchBar from '@components/search-bar'
	import top from '@components/top-bar'
	export default {
		data(){
			return {
				chatInfo: null,
				isMine: false
			}
		},
		methods:{
			getChatInfo(){
				this.$http.get('xxxxx',{userId:"000",friendId:"111"}).then(function(res){
					if(res.status=="200"){
						this.chatInfo = res.data;
					}
				})
			}
		},
		components:{
			searchBar,
			top
		}
	}
</script>

<style>
	.isMine{
		direction: rtl;
	}
</style>