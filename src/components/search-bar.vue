<template>
	<div class="searchBar">
		<input type="text" v-model="searchText" />
		<i>查询</i>
		<!--<iconSvg name='searchIcon'>查询</iconSvg>-->
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
		width: 100%;
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
</style>