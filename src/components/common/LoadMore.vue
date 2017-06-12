<template>
    <div class="load-more">
        <div class="load-more-container">
            <group v-on:increment="increment" ref="groups" :type="type"></group>
        </div>
        <div @click="more()" class="load-more-tip" :class="isLoading()">Loading...</div>
    </div>
</template>

<script>
    import Group from './Group.vue';

    export default {
        name: 'loadmore',
        data: function() {
            return {
                typeSate: this.$props.type
            }
        },
        props: ['type', 'stopload'],
        components: {
            Group
        },
        created: function() {
            this.addEvent();
        },
        methods: {
            addEvent() {
                window.addEventListener('scroll', function () {
                    if (!this.$props.stopload) {
                        this.more();
                    }
                }.bind(this));
            },

            more() {
                const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if (clientHeight + scrollTop >= scrollHeight - 200) {

                    if (this.$store.state[this.typeSate] === 0) {
                        this.fetchData();
                        this.$store.state[this.typeSate] = 1;
                    }
                }
            },

            isLoading() {
                if (this.$store.state[this.typeSate] !== 1) {
                    return 'hide';
                }
            },

            increment(data) {
                this.fetchData = data.fetchData;
            }
        }
    }
</script>

<style>
    .load-more-tip {
        height: 3rem;
        line-height: 3rem;
        font-size: 1rem;
        text-align: center;
        background: #fff;
    }

    .hide {
        display: none;
    }
</style>