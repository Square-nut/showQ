<template>
	<div class="top">
			<div class="top-leftBtn top-child">
				<slot name="top-leftBtn">
					<router-link to='chatList'><iconSvg name="setting"></iconSvg>设置</router-link>
				</slot>
			</div>
			<div class="top-center top-child">
				<slot name="top-center">
					消息
				</slot>
			</div>
			<div class="top-rightBtn top-child">
				<slot name="top-rightBtn">
					<div class="">
						<iconSvg name="icon-create" class="add-btn"></iconSvg>
						<ul class="add-menu">
							<li><iconSvg name='icon-addfriend'></iconSvg>创建群聊</li>
							<li><iconSvg name='icon-addfriend'></iconSvg>加好友/群</li>
							<li><iconSvg name='icon-scan'></iconSvg>扫一扫</li>
							<li><iconSvg name='icon-send'></iconSvg>面对面快传</li>
							<li><iconSvg name='icon-barcode'></iconSvg>付款</li>
							<li><iconSvg name='icon-camera'></iconSvg>拍照</li>
							<li><iconSvg name='icon-redenvelope'></iconSvg>面对面红包</li>
						</ul>
					</div>
				</slot>
			</div>
		</div>
</template>

<script>
	import iconSvg from '@components/icon-svg'
	
	export default {
		components:{
			iconSvg
		}
	}
</script>

<style scoped>
	.top{
		display: flex;
		justify-content: center;
	}
	.top-child{
		flex: 1;
	}
	.add-menu{
		display: none;
	}
	.add-btn:hover + ul{
		display: block;
	}
</style>