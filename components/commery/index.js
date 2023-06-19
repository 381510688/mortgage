// components/commery/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        principal: 0,       // 本金
        timeLimitVisible: false,
        timeLimitValue: 25,            // 贷款年期
        timeLimitText: '25年',            // 贷款年限文本
        rateModeVisible: false,       // 利率方式
        rateModeValue: '2',
        rateModeText: '按LPR',

        lpr: 4.3,     // lpr
        cardinalPoint: 55,   // 基点
        rate: 4.85,       // 利率
        isLPR: true,      // 是否为LPR方式
        
        historicalRecordVisible: false, // 历史 LPR

        timeLimits: [
            { label: '1年', value: 1 },
            { label: '2年', value: 2 },
            { label: '3年', value: 3 },
            { label: '4年', value: 4 },
            { label: '5年', value: 5 },
            { label: '6年', value: 6 },
            { label: '7年', value: 7 },
            { label: '8年', value: 8 },
            { label: '9年', value: 9 },
            { label: '10年', value: 10 },
            { label: '11年', value: 11 },
            { label: '12年', value: 12 },
            { label: '13年', value: 13 },
            { label: '14年', value: 14 },
            { label: '15年', value: 15 },
            { label: '16年', value: 16 },
            { label: '17年', value: 17 },
            { label: '18年', value: 18 },
            { label: '19年', value: 19 },
            { label: '20年', value: 20 },
            { label: '21年', value: 21 },
            { label: '22年', value: 22 },
            { label: '23年', value: 23 },
            { label: '24年', value: 24 },
            { label: '25年', value: 25 },
            { label: '26年', value: 26 },
            { label: '27年', value: 27 },
            { label: '28年', value: 28 },
            { label: '29年', value: 29 },
            { label: '30年', value: 30 }
        ],
        rateModes: [
            { label: '按旧版基准利率', value: '1' },
            { label: '按LPR', value: '2' }
        ]
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTimeLimitPicker () {
            this.setData({ timeLimitVisible: true });
        },
        onRateModePicker () {
            this.setData({ rateModeVisible: true });
        },
        onColumnChange(e) {
            console.log('picker pick:', e);
        },
        onPickerChange(e) {
            const { key } = e.currentTarget.dataset;
            const { value, label } = e.detail;
            console.log('picker change:', e.detail);
            this.setData({
              [`${key}Visible`]: false,
              [`${key}Value`]: value[0],
              [`${key}Text`]: label[0],
            });
            this.switchRateMode(key);
        },
        onPickerCancel(e) {
            const { key } = e.currentTarget.dataset;
            console.log(e, '取消');
            console.log('picker1 cancel:');
            this.setData({
              [`${key}Visible`]: false,
            });
        },
        // 切换利率方式，展示不同
        switchRateMode (key) {
            if (key !== 'rateMode') return;
            let isLPR = this.data.rateModeValue === '2';
            this.setData({
                isLPR,
                rate: isLPR ? this.data.lpr + this.data.cardinalPoint : 4.9
            });
        },
        // 历史LPR弹窗
        onHistroyPopup () {
            this.setData({
                historicalRecordVisible: true
            })
        },
        closeHistoricalRecord () {
            this.setData({
                historicalRecordVisible: false
            })
        }
           
    }
})
