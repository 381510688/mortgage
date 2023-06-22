// components/result-details/index.js
const createRecycleContext = require('miniprogram-recycle-view')
let ctx;
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        details: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    observers: {
        'details': function (newValue) {
            ctx?.append(newValue)
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes: {
        attached: function () {
            ctx = createRecycleContext({
                id: 'recycleId',
                dataKey: 'recycleList',
                page: this,
                itemSize: { 
                    width: 300,
                    height: 25
                }
            })
        }
    }
    
})
