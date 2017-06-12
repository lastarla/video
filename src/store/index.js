import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
    categories: {
        main: [],
        inner: []
    },
    category: {
        slide: [],
        topDownload: [],
        recommends: []
    },
    groups: [],
    video: {},
    downloadVideo: 0,
    // 0:未加载 1:加载中 2:已全部加载
    isListLoading: 0,
    isTabLoading: 0
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})

