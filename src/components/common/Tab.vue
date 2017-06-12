<template>
    <div class="tab-container">
        <ul class="tab" v-if="showTab">
            <li @click="toggle('recommendation')" :class="{active:currentView === 'recommendation'}">Recommendation</li>
            <li @click="toggle('group')" :class="{active:currentView === 'group'}">All</li>
        </ul>
        <div>
            <recommendation :class="{hide:currentView !== 'recommendation'}"></recommendation>
            <loadmore :class="{hide:currentView !== 'group'}" type="isTabLoading" :stopload="stopLoad()"></loadmore>
        </div>
    </div>
</template>

<script>
    import Recommendation from './Recommendation.vue';
    import Loadmore from './LoadMore.vue';

    export default {
        name: 'tab',
        data: function () {
            return {
                currentView: 'recommendation'
            }
        },
        watch: {
            '$route': 'initTab'
        },
        components: {
            Recommendation: Recommendation,
            Loadmore: Loadmore
        },
        computed: {
            showTab() {
                return this.$route.params[0] !== 'home';
            }
        },
        methods: {
            initTab() {
                this.toggle('recommendation');
            },

            toggle(index) {
                this.currentView = index;
            },

            stopLoad() {
                return this.currentView === 'recommendation';
            }
        }
    }
</script>

<style>
    .tab {
        height: 2.85rem;
        line-height: 2.8rem;
        padding-bottom: 2px;
        font-family: Roboto-Medium;
        overflow: hidden;
    }

    .tab li {
        float: left;
        width: 50%;
        font-size: 1.14rem;
        color: rgba(0,0,0,0.54);
        text-align: center;
        border-bottom: 2px solid translate;
    }

    .tab .active {
        color: #e92635;
        border-bottom: 2px solid #e92635;
    }

    .hide {
        display: none;
    }
</style>