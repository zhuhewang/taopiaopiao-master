<template>
	<section id="cinema">
		<city></city>
		<cinemaArea></cinemaArea>
		<cinema></cinema>
	</section>
</template>

<script>
import { mapMutations } from 'vuex'
import city from '@/components/home/city'
import cinemaArea from '@/components/cinema/movieArea'
import cinema from '@/components/cinema/cinema'
export default{
	data () {
		return {
		}
	},
	components: {
		cinema,
		cinemaArea,
		city
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad',
		  'showCityList'
		]),
		requestData (url, fn) {
		  this.pushLoadStack()
		  this.$http.get(url).then(fn).then(this.completeLoad)
		}
	}
}
</script>

<style>
</style>
