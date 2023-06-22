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
            console.log('newValue', newValue)
            this.createCtx(newValue)
            // this.setData({
            //     recycleList: newValue
            // })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        createCtx (data) {
            if (this.ctx) {
                console.log('destroyCtx2', this.ctx)
                this.ctx.destroy()
            }
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
            this.ctx.forceUpdate()
        }
    },
    lifetimes: {
    }
})
