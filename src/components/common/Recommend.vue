<template>
    <div>
        <div class="recommend" v-for="(info, index) in data">
            <div class="rec-head">
                <div class="rec-title">
                    <span class="rec-icon" :class="addClass(info.category)"></span>{{info.alias}}
                </div>
                <span class="rec-reload" @click="reload(index)" :category="info.category" :datatype="type" ref="reload"></span>
            </div>
            <div class="rec-cont">
                <ul>
                    <li v-for="(item, key) in info.list">
                        <router-link class="swiper-title" :to="{path: '/play/', query: {id: item.id}}">
                            <div class="rec-img">
                                <img :src="item.cover" alt="">
                                <div class="rec-info">
                                    <span class="rec-download"></span>
                                    <span class="rec-download-num">{{item.downloadNumber}}</span>
                                    <span class="rec-time">{{item.duration}}</span>
                                </div>
                            </div>  
                            <p class="rec-name">{{item.title}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="rec-more">
                <router-link :to="{path: '/list/' + info.category}">
                    <span class="rec-more-icon"></span>More
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../../store';

    export default {
        name: 'recommend',
        props: ['type', 'list'],
        computed: {
            data() {
                let data = this.$props.type === 'topDownload'
                        ? this.$store.state.category.topDownload
                        : this.$store.state.category.recommends;

                return data;
            }
        },
        methods: {
            reload(index) {
                const reloadBtn = this.$refs.reload[index];
                const category = reloadBtn.getAttribute('category');
                const dataType = reloadBtn.getAttribute('datatype');
                const size = 4;

                if (reloadBtn.getAttribute('disable') === 'disable') {
                    return;
                }

                store.dispatch({
                    type: 'getList',
                    category: category,
                    dataType: dataType,
                    size: size,
                    loaded: function() {
                        reloadBtn.setAttribute('disable', '');
                    }
                });

                reloadBtn.setAttribute('disable', 'disable');
            },

            addClass(category) {
                var type = this.$route.params[0];

                if (type !== 'home') {
                    return 'rec-icon-list';
                }

                return 'rec-icon-' + category;
            }
        }
    }
</script>

<style>
    .recommend {
        background: #fff;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
        margin-bottom: 8px;
    }

    .rec-head {
        height: 3.428rem;
        padding: 0 10px;
        overflow: hidden;
    }

    .rec-title {
        float: left;
        padding-top: 1.1rem;
        color: rgba(0,0,0,0.54);
    }

    .rec-icon {
        display: inline-block;
        width: 1rem;
        height: 1.3rem;
        vertical-align: middle;
        background-image: url(../../assets/img/category_hot.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 5px;
        vertical-align: bottom;
    }

    .rec-reload {
        float: right;
        width: 3rem;
        height: 100%;
        background: url(../../assets/img/refresh.png) no-repeat;
        background-size: 44% 38%;
        background-position: 50% 50%;
    }

    .rec-cont {
        padding: 0 4px 8px 4px;
        overflow: hidden;
    }

    .rec-cont li {
        float: left;
        width: 50%;
        margin: 0 0 8px 0;
        padding: 0 4px 0 4px;
        box-sizing: border-box;
    }

    .rec-img {
        position: relative;
        display: block;
        height: 6.8rem;
        overflow: hidden;
    }

    .rec-img img {
        display: block;
        width: 100%;
    }

    .rec-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1rem;
        padding: 5px 10px;
        font-size: 0.72rem;
        color: #d8d8d8;
        background-image: linear-gradient(-179deg, rgba(0,0,0,0.00) 2%, rgba(0,0,0,0.30) 46%, rgba(0,0,0,0.60) 100%);
        overflow: hidden;
    }

    .rec-download {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background: url(../../assets/img/download.png) no-repeat;
        background-size: contain;
        margin-right: 2px;
    }

    .rec-download-num {
        vertical-align: 1px;
    }

    .rec-time {
        float: right;
        font-size: 0.72rem;
    }

    .rec-name {
        height: 2.3rem;
        font-size: 1rem;
        color: rgba(0,0,0,0.70);
        line-height: 1.3rem;
        padding: 5px;
        word-break: break-all;
        overflow: hidden; 
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; 
    }

    .rec-more {
        border-top: 1px solid rgba(0,0,0,0.12);
    }

    .rec-more-icon {
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        background: url(../../assets/img/more.png);
        background-size: contain;
        vertical-align: 1px;
        margin-right: 5px;
    }

    .rec-more a{
        display: block;
        height: 3.4rem;
        line-height: 3.4rem;
        font-size: 1.14rem;
        color: rgba(0,0,0,0.54);
        text-align: center;
    }

    .rec-icon-music {
        background-image: url(../../assets/img/category_music.png);
        background-position: 0 2px;
    }

    .rec-icon-music {
        background-image: url(../../assets/img/category_video.png);
        background-position: 0 3px;
    }

    .rec-icon-list {
        height: 1rem;
        background-image: url(../../assets/img/rectangle.png);
        margin-right: 0;
        vertical-align: -1px;
        background-position: 0 2px;
    }
</style>