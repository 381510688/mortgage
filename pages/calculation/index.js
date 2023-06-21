// pages/calculation/index.js
import Toast from 'tdesign-miniprogram/toast/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentType: 'commery'
    },
    onTabsClick (event) {
        console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
        this.setData({
            currentType: event.detail.value
        })
    },
    // 计算
    computResult () {
        let currentType = this.data.currentType;
        let commeryComponent = this.selectComponent('#commery');
        let fundComponent = this.selectComponent('#fund')
        if (commeryComponent && commeryComponent.data.principal <= 0) {
            return Toast({
                context: this,
                selector: '#t-toast',
                message: '商贷金额应大于0元',
            });
        }
        if (fundComponent && fundComponent.data.principal <= 0) {
            return Toast({
                context: this,
                selector: '#t-toast',
                message: '公积金金额应大于0元',
            });
        }
        wx.navigateTo({
            url: `/pages/result/index?commeryData=${JSON.stringify(commeryComponent?.data || {})}&fundData=${JSON.stringify(fundComponent?.data || {})}&currentLoanType=${currentType}`,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})