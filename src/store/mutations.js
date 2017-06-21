import * as types from './mutation-types'

export default {
    [types.GET_CATEGORIES] (state, data) {
        state.categories = data;
    },
    [types.GET_CATEGORY] (state, data) {
        state.category = data;
    },
    [types.GET_LIST] (state, data) {

        if (data.dataType === 'groups') {

            let groups = state.groups[0];

            if (groups && !data.reload) {
                groups.list = groups.list.concat(data.list);
                groups.page = data.page;
                groups.isEnd = data.isEnd;
                groups.category = data.category;
            }
            else {
                let obj = {};

                obj.list = data.list;
                obj.page = data.page;
                obj.isEnd = data.isEnd;
                obj.category = data.category;

                if (data.reload) {
                    state.groups.splice(0, 1, obj);
                }
                else {
                    state.groups.push(obj);
                }
            }
        }
        else {
            let arrData = state['category'][data.dataType];

            arrData.forEach(function (item, index) {
                if (item.category === data.category) {
                    item.list = data.list;
                    item.page = data.page;
                    item.isEnd = data.isEnd;
                }
            });
        }
    },
    [types.GET_VIDEO] (state, data) {
        state.video = data;
    },
    [types.DOWNLOAD_VIDEO] (state, data) {
        state.downloadVideo = data;
    }
};
