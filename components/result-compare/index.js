// components/result-compare/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        originalData: {
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        data: {}
    },

    observers: {
        'originalData': function (newData) {
            if (Array.isArray(newData)) {
                this.setData({
                    data: {
                        P: newData[0].P + newData[1].P,
                        S1: newData[0].S1 + newData[1].S1,
                        S2: newData[0].S2 + newData[1].S2,
                        Y1: newData[0].Y1 + newData[1].Y1,
                        Y2_1: newData[0].Y2_1 + newData[1].Y2_1,
                        Y2_2: newData[0].Y2_2 + newData[1].Y2_2,
                        Y2_n: newData[0].Y2_n + newData[1].Y2_n
                    }
                })
            } else {
                this.setData({
                    data: newData
                })
            }
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
