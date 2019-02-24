<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src='item.imgUrl' />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		data () {
			return{
				recommendList:[{
				id:'0001',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e7/e71ac5931b3f77c2a3.water.jpg_200x200_91be263c.jpg',
				title:'桂林千古情景区',
				desc:'大型歌舞《桂林千古情》'
			}, {
				id:'0002',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e7/e71ac5931b3f77c2a3.water.jpg_200x200_91be263c.jpg',
				title:'桂林千古情景区',
				desc:'大型歌舞《桂林千古情》'
			}, {
				id:'0003',
				imgUrl:'http://img1.qunarzz.com/sight/p0/1807/e7/e71ac5931b3f77c2a3.water.jpg_200x200_91be263c.jpg',
				title:'桂林千古情景区',
				desc:'大型歌舞《桂林千古情》'
			}]
			}
			
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		background:#eee
		margin-top: .2rem
		line-height: .8rem
		text-align: .2rem
	.item
		overflow:hidden
		display:flex
		height:1.9rem
		.item-img
			width:1.7rem
			height:1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width:0
			.item-title
				height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color:#CCC
				ellipsis()
			.item-button
				background:#ff9300
				padding:0 .2rem
				line-height:.44rem
				border-radius: .06rem
				color:#fff
				margin-top: .2rem
</style>