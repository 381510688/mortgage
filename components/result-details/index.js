// components/result-details/index.js
const createRecycleContext = require('miniprogram-recycle-view')
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
            this.destroyCtx()
            this.createCtx(newValue)
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        createCtx (data) {
            this.ctx = createRecycleContext({
                id: 'recycleId',
                dataKey: 'recycleList',
                page: this,
                itemSize: { 
                    width: 300,
                    height: 25
                }
            })
            this.ctx.append(data)
        },
        destroyCtx () {
            if (this.ctx) {
                this.ctx.destroy()
            }
        }
    },
    lifetimes: {
    }
    
})
