<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src='item.imgUrl' />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeWeekend',
		data () {
			return{
				recommendList:[{
				id:'0001',
				imgUrl:'http://img1.qunarzz.com/sight/source/1505/24/f947f286f2cf61.jpg_r_640x214_46fb6378.jpg',
				title:'桂林千古情景区',
				desc:'大型歌舞《桂林千古情》'
			}, {
				id:'0002',
				imgUrl:'http://img1.qunarzz.com/sight/source/1505/24/f947f286f2cf61.jpg_r_640x214_46fb6378.jpg',
				title:'桂林千古情景区',
				desc:'大型歌舞《桂林千古情》'
			}, {
				id:'0003',
				imgUrl:'http://img1.qunarzz.com/sight/source/1505/24/f947f286f2cf61.jpg_r_640x214_46fb6378.jpg',
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
	.item-img-wrapper
		height:0
		overflow:hidden
		padding-bottom: 33.9%
		.item-img
			width:100%
	.item-info
		padding: .1rem
		.item-title
			height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color:#CCC
			ellipsis()
</style>