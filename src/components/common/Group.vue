<template>
    <div class="group-container">
        <div class="group" v-for="(item, index) in groups">
            <router-link :to="{path: '/play/', query: {id: item.id}}">
                <div class="group-img">
                    <img :src="item.cover" alt="">
                    <div class="group-info">
                        <span class="group-time">{{item.duration}}</span>
                    </div>
                </div>
                <div class="group-cont">
                    <p class="group-title">{{item.title}}</p>
                    <div class="group-tip">
                        <span class="group-play"></span>{{item.playTimes}}
                        <span class="group-download"></span>{{item.downloadNumber}}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import store from '../../store';

    export default {
        name: 'group',
        data: function() {
            return {
                typeState: this.$props.type
            };
        },
        props: ['type'],
        created: function() {
            this.fetchData();
            this.increment();
        },
        watch: {
            '$route': 'loadGroup'
        },
        computed: {
            groups() {
                return this.$store.state.groups[0]
                        ? this.$store.state.groups[0]['list']
                        : [];
            }
        },
        methods: {
            fetchData(reload) {
                const size = 10;

                store.dispatch({
                    type: 'getList',
                    category: this.$route.params[0],
                    dataType: 'groups',
                    size: size,
                    reload: reload,
                    loaded: this.loaded,
                    loadAll: this.loadAll
                });
            },

            loaded() {
                this.$store.state[this.typeState] = 0;
            },

            loadAll() {
                this.$store.state[this.typeState] = 2;
            },

            increment() {
                this.$emit('increment', {
                    fetchData: this.fetchData
                });
            },

            loadGroup() {
                this.fetchData(true);
            }
        }
    }
</script>

<style>
    .group {
        padding: 10px 8px;
        background: #fff;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
        margin-bottom: 8px;
        overflow: hidden;
    }

    .group-img {
        position: relative;
        float: left;
        width: 9.8rem;
        height: 5.5rem;
        margin-right: 10px;
        overflow: hidden;
    }

    .group-img img {
        display: block;
        width: 100%;
    }

    .group-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1.8rem;
        font-size: 0.72rem;
        color: #fff;
        background-image: linear-gradient(-179deg, rgba(0,0,0,0.00) 2%, rgba(0,0,0,0.30) 46%, rgba(0,0,0,0.60) 100%);
        overflow: hidden;
    }

    .group-time {
        position: absolute;
        right: 10px;
        bottom: 4px;
        font-size: 0.72rem;
        color:#d8d8d8;
    }

    .group-title {
        height: 4.2rem;
        line-height: 1.4rem;
        font-size: 1rem;
        color: #171717;
        word-break: break-all;
        overflow: hidden; 
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; 
    }

    .group-tip {
        font-size: 0.85rem;
        color: #9e9e9e;
        margin-top: 2px;
    }

    .group-tip span {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background-repeat: no-repeat;
        background-size: contain;
        margin-right: 3px;
        vertical-align: -1.5px;
    }

    .group-play {
        background-image: url(../../assets/img/play.png);
    }

    .group-download {
        background-image: url(../../assets/img/download.png);
        margin-left: 14px;
    }
</style>