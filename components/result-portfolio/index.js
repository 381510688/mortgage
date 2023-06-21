// components/result-portfolio/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        type: {
            type: String
        },
        data: {
            type: Array,
            value: [{
                P: 0,
                S: 0,
                I: 0,
                Y: 0,
                details: []
            },
            {
                P: 0,
                S: 0,
                I: 0,
                Y: 0,
                details: []
            }]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        details: []
    },

    observers: {
        'data': function (newData) {
            if (!Array.isArray(newData) || !newData.length) return;
            let data1 = newData[0].details;
            let data2 = newData[1].details;
            let len = data1.length > data2.length ? data1.length : data2.length;
            let details = []
            for (let i = 0; i < len; i++) {
                details.push({
                    Yt: (data1[i]?.Yt || 0) + ( data2[i]?.Yt || 0), // 月供总额
                    Yp: (data1[i]?.Yp || 0) + (data2[i]?.Yp || 0), // 月供本金
                    Yi: (data1[i]?.Yi || 0) + (data2[i]?.Yi || 0), // 月供利息
                    Pr: (data1[i]?.Pr || 0) + (data2[i]?.Pr || 0) // 剩余本金
                })
            }
            this.setData({
                details
            })
        }
    }
})
