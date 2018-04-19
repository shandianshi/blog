/**
 * Created by yzl on 2018/4/19.
 */


module.exports = {
    title: "Elona",
    base:"/blog/",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'VuePress', link: 'https://vuepress.vuejs.org/'},
        ],
        sidebar:
            {

                '/pixie/': [
                    ['intro',"简介"],
                    ['log',"功能更新"]
                ],
                '/':[
                    {
                        title:"项目",
                        children: [
                            ['pixie/intro',"pixieCatcher"],
                            // ['otn/',"otn project"]
                        ]
                    },
                    ['/',"随便玩玩"],
                    ['/',"随便看看"],

                    // ['otn',"otn project"],

                ]
            },

    },

}



