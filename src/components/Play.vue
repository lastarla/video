<template>
    <div>
        <top></top>
        <div class="video-container">
            <div class="video-content">
                <div class="video-cont">
                    <!-- <iframe src="http://player.youku.com/embed/XMjc4MTkwOTY4NA==" frameborder="0" allowfullscreen></iframe> -->
                    <iframe :src="video.embed" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="video-title" v-html="video.title"></div>
            <div class="video-tip">
                <span class="video-play"></span><em v-html="video.playTimes"></em>
                <span class="video-download"></span><em v-html="video.downloadNumber"></em>
            </div>
        </div>
        <div class="video-download-content">
            <a @click="downloadVideo(index)" :href="item.url" class="video-download-btn" :class="{active: active === index}" v-for="(item, index) in video.downloadList" :download="item.filename">
                <span v-html="item.alias"></span><span class="btn-icon"></span>
            </a>
        </div>
    </div>
</template>

<script>
    import Top from './common/Top';
    import store from '../store';

    export default {
        name: 'play',
        components: {
            Top
        },
        created: function () {
            this.fetchData();
        },
        computed: {
            video() {
                return this.$store.state.video;
            },

            active() {
                return this.$store.state.downloadVideo;
            }
        },
        methods: {
            fetchData() {
                store.dispatch({
                    type: 'getVideo',
                    id: this.$route.query.id
                });
            },

            downloadVideo(active) {
                store.dispatch({
                    type: 'downloadVideo',
                    active: active
                });
            }
        }
    }
</script>

<style>
    .video-container {
        background: #fff;
        padding-bottom: 10px;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
    }

    .video-content {
        position: relative;
        height: 17rem;
    }

    .video-cover {
        height: 100%;
    }

    .video-cont {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .video-cont iframe {
        width: 100%;
        height: 100%;
    }

    .hide {
        display: none;
    }

    .video-cover img {
        width: 100%;
        height: 100%;
    }

    .video-title {
        font-size: 1rem;
        color: #171717;
        line-height: 1.4rem;
        padding: 5px 10px 10px;
        word-break: break-all;
        overflow: hidden; 
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-family: Roboto-Medium;
    }

    .video-tip {
        padding: 0 10px;
    }

    .video-tip span {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background-repeat: no-repeat;
        background-size: contain;
        margin-right: 3px;
    }

    .video-tip em {
        font-style: normal;
    }

    .video-play {
        background-image: url(../assets/img/play.png);
    }

    .video-download {
        background-image: url(../assets/img/download.png);
        margin-left: 14px;
    }

    .video-download-content {
        padding: 32px 36px;
    }

    .video-download-btn {
        font-family: Roboto-Medium;
        position: relative;
        display: block;
        font-size: 1rem;
        line-height: 1.3rem;
        padding: 10px 0;
        margin-bottom: 16px;
        border: 1px solid #bdbdbd;
        text-align: center;
        border-radius: 2px;
        color: rgba(0,0,0,0.87);
    }

    .video-download-btn .btn-icon{
        position: absolute;
        top: 50%;
        right: 10px;
        width: 1rem;
        height: 1rem;
        background-image: url(../assets/img/download-play.png);
        background-repeat: no-repeat;
        background-size: contain;
        transform: translate(0, -50%);
    }

    .video-download-content .active {
        color: #fff;
        font-weight: bold;
        background: #5882F5;
        border: 1px solid #5882F5;
    }

    .video-download-content .active .btn-icon{
        background-image: url(../assets/img/download-play2.png);
    }
</style>