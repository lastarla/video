<template>
    <div>
        <recommend type="topDownload"></recommend>
        <tip type="inner"></tip>
        <recommend type="recommends"></recommend>
    </div>
</template>

<script>
import Tip from './Tip.vue';
import Recommend from './Recommend.vue';
import Tab from './Tab.vue';
import store from '../../store';

export default {
    name: 'category',
    components: {
        Tip,
        Recommend,
        Tab
    }
}
</script>