<template>
    <div class="tip">
        <ul v-if="type === 'main'" class="tip-cont">
            <li v-for="(tip, index) in tips.main">
                <router-link :to="'/category/' + tip.name">{{tip.alias}}</router-link>
            </li>
        </ul>
        <ul v-if="type === 'inner'" class="tip-cont tip-cont-inner">
            <li v-for="(tip, index) in tips.inner">
                <router-link :to="'/list/' + tip.name">{{tip.alias}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style>
    .tip {
        background: #fff;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
        margin-bottom: 8px;
    }

    .tip-cont {
        padding: 5px 5px 15px;
        overflow: hidden;
    }

    .tip-cont li {
        float: left;
        margin-top: 10px;
    }

    .tip-cont a {
        display: block;
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: 1rem;
        padding: 0 5px;
        margin: 0 5px;
        color: rgba(0,0,0,0.60);
        text-decoration: none;
    }

    .tip-cont .router-link-active {
        color: #fff;
        background: #e92635;
    }

    .tip-cont-inner a {
        height: 2.142rem;
        line-height: 2.142rem;
        border: 1px solid #bdbdbd;
        border-radius: 12.857rem;
        padding: 0 20px;
    }

    .tip-cont-inner .router-link-active {
        background: #5882f5;
        border: 1px solid #5882f5;
    }
</style>

<script>
    export default {
        name: 'tip',
        props: ['type'],
        computed: {
            tips() {
                return this.$store.state.categories;
            }
        }
    }
</script>