<template>
    <div>
        <top></top>
        <div class="list-title">Top 100 download</div>
        <loadmore type="isListLoading"></loadmore>
    </div>
</template>

<script>
import Top from './common/Top.vue';
import Loadmore from './common/LoadMore.vue';

export default {
    name: 'category',
    components: {
        Top,
        Loadmore
    }
}
</script>

<style>
    .list-title {
        font-size: 1rem;
        line-height: 1.2rem;
        padding: 20px 10px 12px;
        color: rgba(0,0,0,0.54);
    }
</style>