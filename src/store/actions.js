import * as types from './mutation-types'
import axios from 'axios'
import {root} from '../config'

export default {
    getCategories({commit}) {
        axios.get(root + 'categories')
            .then(function (response) {
                var result = response.data;

                if (result.code) {
                    commit(types.GET_CATEGORIES, result.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    getCategory({commit}, {category}) {
        axios.get(root + category + '/')
            .then(function (response) {
                var result = response.data;

                if (result.code) {
                    commit(types.GET_CATEGORY, result.data);
                }
                else {
                    commit(types.GET_CATEGORY, {});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    getList({commit, state}, data) {
        const dataList = state[data.dataType] || state.category[data.dataType];

        let page = 1;
        let isEnd = false;

        dataList.forEach(function (item, index) {
            if (item.category === data.category) {
                if (typeof item.page !== 'undefined') {
                    page = item.page + 1;
                }

                if (typeof item.isEnd !== 'undefined') {
                    isEnd = item.isEnd;
                }
            }
        });

        if (isEnd) {
            setTimeout(function() {
                data.loadAll();
            }, 0)
            return;
        }

        let dataType = 'all';

        if (data.dataType === 'topDownload') {
            dataType = 'topDownload';
        }

        axios.get(root + data.category + '/' + dataType
            + '?page=' + (page + '' || '') + '&size=' + (data.size || ''))
            .then(function (response) {
                var result = response.data;

                if (result.code) {
                    commit(types.GET_LIST, {
                        dataType: data.dataType,
                        category: data.category,
                        list: result.data,
                        page: result.page,
                        isEnd: result.isEnd
                    });
                }

                data.loaded();
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getVideo({commit}, {id}) {
        axios.get(root + 'item?id=' + id)
            .then(function (response) {
                var result = response.data;

                if (result.code) {
                    commit(types.GET_VIDEO, result.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    downloadVideo({commit}, {active}) {
        commit(types.DOWNLOAD_VIDEO, active);
    }
};
