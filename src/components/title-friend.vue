<template>
	<ul>
		<li class="title" v-for="v in data" @click="openChatPanel">
			<div class="friendIcon">
				<img :src="v.src"/>
			</div>
			<div class="chatPanel">
				<div class="chatPanel-top">
					<p class="friendName" v-if="showLastChat">{{ v.name }}</p>
					<i class="chatTime" v-if="showDate">{{ v.date }}</i>
				</div>
				<p class="chatPanel-down">
					{{ v.chat }}
					<iconSvg name="icon-point" v-if="showRed"></iconSvg>
				</p>
			</div>
		</li>	
	</ul>
</template>

<script>
	import iconSvg from '@components/icon-svg'
	
	export default {
		data(){
			return {
				
			}
		},
		props: ['data','showDate','showRed','showLastChat','path'],
		components: {
			iconSvg
		},
		methods: {
			openChatPanel(){
				this.$router.push({path: this.path, query:{friendId:"000"}})
			}
		}
	}
</script>

<style>
	li{
		width: 100%;
		height: 60px;
	}
</style>