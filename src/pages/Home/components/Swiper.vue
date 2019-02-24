<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl" />
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
  	return{
  		swiperOption:{
  			pagination: '.swiper-pagination',
  			loop:true
  		},
  		swiperList: [{
  			id:'0001',
 				imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg'
  		},{
  			id:'0002',
 				imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a5379fa4391437e3c111d17e59ed24d3.jpg_750x200_3126a045.jpg'
  		}]
  	}
  }
}
</script>

<style lang="stylus" scoped>
	
	.wrapper >>> .swiper-pagination-bullet-active
			background:#fff !important
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:26.67%
		background:#eee
		.swiper-img
			width:100%
</style>
