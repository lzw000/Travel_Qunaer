<template>
	<div>
		<div class="header">
			<div class="header-left">
				<div class="iconfont back-icon">&#xe624;</div>
			</div>
			<div class="header-input">
				<span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
			<router-link to='/City'>
				<div class="header-right">
					{{this.city}}
					<span class="iconfont arrow-icon">&#xe606;</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
//import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
  	...mapState(['city']),//映射
  	//...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
	display:flex
	line-height: $headerHeight
	background: $bgColor
	color: #fff
	.header-left
		width: .64rem
		float: left
		.back-icon
			text-align:center
			font-size:.4rem
	.header-input
		flex: 1
		height: .64rem
		margin-top: .12rem
		background: #fff
		border-radius: .1rem
		color:#ccc
		line-height:.64rem
		padding-left:.2rem
	.header-right
		min-width: 1.04rem
		padding: 0 .1rem
		float: right
		text-align: center
		color:#fff
		.arrow-icon
			margin-left: -.04rem
			font-size: .24rem
</style>
