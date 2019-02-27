<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg"  />
			<div class="banner-info">
				<div class="banner-title">北京海洋馆(AAAA景区)</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe60d;</span>
					39
				</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	components: {
		CommonGallary
	},
	methods: {
		handleBannerClick () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	},
	data () {
		return {
			showGallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1509/9a/9a48d0f21ae0c4e2.img.png_r_800x800_4f617285.png','http://img1.qunarzz.com/sight/p0/1611/98/982abef16c8470daa3.img.jpg_r_800x800_aff1f252.jpg']
		}
	}
}
</script>

<style lang="stylus" scoped>
.banner
	overflow: hidden
	height: 0
	padding-bottom: 55%
	position: relative
	.banner-img
		width: 100%
	.banner-info
		display: flex
		position: absolute
		left: 0
		right: 0
		bottom: 0
		line-height: .6rem
		color: #fff
		background-image: linear-gradient(top, rgba( 0, 0, 0, 0), rgba( 0, 0, 0, 0.8))
		.banner-title
			font-size: .32rem
			flex: 1
			padding: 0 .2rem
		.banner-number
			height: .32rem
			margin-top: .14rem
			padding: 0 .4rem
			line-height: .4rem
			border-radius: .2rem
			background: rgba( 0, 0, 0, .8)
			font-size: .24rem
			.banner-icon
				font-size: .24rem
</style>