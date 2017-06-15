<template>
    <div class="swiper-main" v-if="hasSwiper">
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="(item, index) in swiper" :key="item.id">
                <router-link :to="{path: '/play/', query: {id: item.id}}">
                    <div class="swiper-img">
                        <img :src="item.cover" alt="">
                        <div class="swiper-info">
                            <span class="swiper-download"></span>{{item.downloadNumber}}
                            <span class="swiper-time">{{item.duration}}</span>
                        </div>
                        <span class="swiper-play"></span>
                    </div>
                    <p class="swiper-title">{{item.title}}</p>
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import {swiper, swiperSlide} from 'vue-awesome-swiper';

    Vue.use(VueAwesomeSwiper);

    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    direction: 'horizontal',
                    slidesPerView: 1,
                    paginationClickable: true,
                    mousewheelControl: true,
                    autoplay: 3000,
                    loop: true
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$store.state.category.slide;
            },

            hasSwiper() {
                const slide = this.$store.state.category.slide;

                if (slide && this.$route.params[0] === 'home') {
                    return !!slide.length;
                }
                else {
                    return false;
                }
            }
        }
    }
</script>

<style>
.swiper-main {
    padding: 10px;
    background: #fff;
    margin-bottom: 8px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
}

.swiper-box {
    width: 100%;
    height: 100%;
}

.swiper-img {
    position: relative;
    height: 14.2rem;
    margin-bottom: 6px;
}

.swiper-img img{
    display: block;
    width: 100%;
    height: 100%;
}

.swiper-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    padding: 10px 10px 6px;
    font-size: 0.72rem;
    color: #d8d8d8;
    background-image: linear-gradient(-179deg, rgba(0,0,0,0.00) 2%, rgba(0,0,0,0.30) 46%, rgba(0,0,0,0.60) 100%);
    overflow: hidden;
}

.swiper-download {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: bottom;
    background: url(../../assets/img/download.png) no-repeat;
    background-size: contain;
    margin-right: 5px;
}

.swiper-time {
    float: right;
    font-size: 0.72rem;
}

.swiper-play {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3.7rem;
    height: 3.7rem;
    background: url(../../assets/img/play.png) no-repeat;
    background-size: contain;
    transform: translate(-50%, -50%);
}

.swiper-title {
    font-size: 1rem;
    color: #171717;
    line-height: 1.43rem;
}

.swiper-tip {
    font-size: 0.857rem;
    color: rgba(0,0,0,0.50);
    line-height: 1.43rem;
}
</style>
