import Vue from 'vue'
import Router from 'vue-router'
import hot from './home/hot'
import coming from './home/coming'
import swiper from './home/swiper'
import city from './home/city'
import cinema from './cinema/cinema'
import cinemaArea from './cinema/movieArea'
import hotEvaluation from './movieDetail/hotEvaluation'
import film from './cinemaDetail/film'
import playDate from './cinemaDetail/playDate'
import playVideo from './playVideo'
import footerNav from './footerNav'

Vue.use(Router)

export default {
	hot,
	coming,
	city,
	cinema,
	cinemaArea,
	swiper,
	hotEvaluation,
	film,
	playDate,
	playVideo,
	footerNav
}
