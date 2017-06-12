import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  categories: {
    main: [
        {
            "name": "home",
            "alias": "Home"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        },
        {
            "name": "sport",
            "alias": "Sport"
        }
    ],
    inner: [
        {
            "name": "home",
            "alias": "Home"
        },
        {
            "name": "sport",
            "alias": "Sport"
        }
    ]
  },
  category: {
        "slide" : [
            {
                "id" : 1,
                "downloadNumber" : 1680,
                "duration" : "1:45",
                "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                "title" : "World's best bartender Jennifer Le Nechet’s..."
            },
            {
                "id" : 2,
                "downloadNumber" : 999,
                "duration" : "1:45",
                "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                "title" : "World's best bartender Jennifer Le Nechet’s...",
                "tip" : "World's best bartender Jennifer Le Nechet’s..."
            }
        ],
        "topDownload" : [
            {
                "category" : "hot",
                "alias" : "Top Download",
                "list" : [
                    {
                        "id" : 1,
                        "downloadNumber" : 1680,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    }
                ]
            }
        ],
        "recommends" : [
            {
                "category" : "music",
                "alias" : "Best of  Music",
                "list" : [
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    }
                ]
            },
            {
                "category" : "video",
                "alias" : "Best of  Music",
                "list" : [
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    },
                    {
                        "id" : 1,
                        "downloadNumber" : 999,
                        "duration" : "1:45",
                        "cover" : "http://m2.auto.itc.cn/car/600/81/73/Img18477381_600.JPG",
                        "title" : "World's best bartender Jennifer Le Nechet’s..."
                    }
                ]
            }
        ]
    }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})

