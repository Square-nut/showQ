<template>
	<div class="nav">
		<router-link class="nav-btn" to='chatList'>
			<iconSvg></iconSvg>
			消息
		</router-link>
		<router-link class="nav-btn" to='contact'>
			<iconSvg></iconSvg>
			联系人
		</router-link>
		<router-link class="nav-btn" to='dynamic'>
			<iconSvg></iconSvg>
			动态
		</router-link>
	</div>
</template>

<script>
	import iconSvg from '@components/icon-svg'
	export default{
		components:{
			iconSvg
		}
	}
</script>

<style scoped>
	.nav{
		display: -webkit-flex; /* Safari */
		display: flex;
	}
	.nav .nav-btn{
		justify-content: space-between;
		flex: 1;
	}
	.router-link-active{
		color: deepskyblue;
	}
</style>