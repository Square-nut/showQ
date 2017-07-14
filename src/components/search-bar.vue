<template>
	<div class="searchBar">
		<input type="text" v-model="searchText" />
		<i><iconSvg name='icon-artboard9' width="12" height="12"></iconSvg>查询</i>
		<!---->
	</div>
</template>

<script>
	import iconSvg from '@components/icon-svg'
	export default{
		components:{
			iconSvg
		},
		props: ['searchTarget'],
		data(){
			return {
				searchText: null
			}
		},
		watch: {
			'searchText': 'getSearchResult'
		},
		methods:{
			getSearchResult(){
				this.$http.get('xxx/'+this.searchTarget,{text:searchText}).then(function(res){
					if(res.status == "200"){
						this.$emit('backData', res.data)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.searchBar{
		position: relative;
	}
	input{
		width: calc(100% - 1,4rem);
		padding: 0 .7rem;
		border-radius: 3px;
		border: 1px solid #cdcdcd;
		background: #CDCDCD;
	}
	i{
		position: absolute;
		top: 0;
		font-size: 12px;
		font-style: normal;
		color: #ffffff;
	}
	svg{
		/*fill: #FFFFFF;*/
	}
</style>