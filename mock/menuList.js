export const menuList = [{
    "icon": "home-filled",
    "title": "首页",
    "path": "/home/index"
}, {
    "icon": "histogram",
    "title": "数据大屏",
    "path": "/dataScreen"
}, {
    "icon": "data-analysis",
    "title": "Dashboard",
    "path": "/dashboard",
    "children": [{
        "path": "/dashboard/dataVisualize",
        "title": "数据可视化",
        "icon": "menu"
    }, {
        "path": "/dashboard/embedded",
        "title": "内嵌页面",
        "icon": "menu"
    }]
}, {
    "icon": "trend-charts",
    "title": "Echarts",
    "path": "/echarts",
    "children": [{
        "path": "/echarts/waterChart",
        "title": "水型图",
        "icon": "menu"
    }, {
        "path": "/echarts/columnChart",
        "title": "柱状图",
        "icon": "menu"
    }, {
        "path": "/echarts/lineChart",
        "title": "折线图",
        "icon": "menu"
    }, {
        "path": "/echarts/pieChart",
        "title": "饼图",
        "icon": "menu"
    }, {
        "path": "/echarts/radarChart",
        "title": "雷达图",
        "icon": "menu"
    }, {
        "path": "/echarts/nestedChart",
        "title": "嵌套环形图",
        "icon": "menu"
    }]
}, {
    "icon": "briefcase",
    "title": "常用组件",
    "path": "/assembly",
    "children": [
        {
            "path": "/assembly/batchImport",
            "title": "批量导入数据",
            "icon": "menu"
        },
        {
            "path": "/assembly/overShowTooltips",
            "title": "超出显示...",
            "icon": "menu"
        },
        {
            "path": "/assembly/virtualList",
            "title": "虚拟列表",
            "icon": "menu"
        }
   ]
}, {
    "icon": "stamp",
    "title": "自定义指令",
    "path": "/directives",
    "children": [{
        "path": "/directives/copyDirect",
        "title": "复制指令",
        "icon": "menu"
    }, {
        "path": "/directives/watermarkDirect",
        "title": "水印指令",
        "icon": "menu"
    }, {
        "path": "/directives/dragDirect",
        "title": "拖拽指令",
        "icon": "menu"
    }, {
        "path": "/directives/debounceDirect",
        "title": "防抖指令",
        "icon": "menu"
    }, {
        "path": "/directives/throttleDirect",
        "title": "节流指令",
        "icon": "menu"
    }, {
        "path": "/directives/longpressDirect",
        "title": "长按指令",
        "icon": "menu"
    }]
}, {
    "icon": "paperclip",
    "title": "外部链接",
    "path": "/link",
    "children": [{
        "path": "/link/github",
        "title": "GitHub 仓库",
        "icon": "menu",
        "isLink": "https://github.com/wangling0126"
    }]
}]