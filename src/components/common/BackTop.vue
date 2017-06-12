<template>
    <div @click="backTop()" class="back-top" :class="{hide: !isShow}"></div>
</template>

<script>
    export default {
        name: 'backTop',
        data: function() {
            return {
                isShow: false
            };
        },
        created: function () {
            this.scrollHandler();
        },
        methods: {
            backTop() {
                window.scrollTo(0, 0);
                this.isShow = false;
            },

            scrollHandler() {
                const delay = 100;
                const winHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                let scrollTop = 0;

                window.addEventListener('scroll', function (e) {
                    setTimeout(function () {
                        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                        if (!this.isShow && scrollTop > 500) {
                            this.isShow = true;
                        }
                        else if (this.isShow && scrollTop <= 500) {
                            this.isShow = false;
                        }
                    }.bind(this), delay);
                }.bind(this));
            }
        }
    }
</script>

<style>
    .back-top {
        position: fixed;
        right: 8px;
        bottom: 80px;
        width: 3.1rem;
        height: 3.1rem;
        background: url(../../assets/img/back-top.png) no-repeat;
        background-size: contain;
        z-index: 9;
    }

    .hide {
        display: none;
    }
</style>