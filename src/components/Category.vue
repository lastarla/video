<template>
    <div>
        <top></top>
        <tip type="main"></tip>
        <swiper></swiper>
        <tab></tab>
        <backtop></backtop>
    </div>
</template>

<script>
import Top from './common/Top.vue';
import Tip from './common/Tip.vue';
import Swiper from './common/Swiper.vue';
import Tab from './common/Tab.vue';
import Backtop from './common/BackTop.vue';
import store from '../store';

export default {
    name: 'category',
    components: {
        Top,
        Tip,
        Swiper,
        Tab,
        Backtop
    },
    created: function () {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            store.dispatch({
                type: 'getCategories'
            });
            store.dispatch({
                type: 'getCategory',
                category: this.$route.params[0]
            });
        }
    }
}
</script>