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
        this.setData({
            currentType: event.detail.value
        })
    },
    // 计算
    computResult () {
        let currentType = this.data.currentType;
        let commeryComponent = this.selectComponent('#commery');
        let fundComponent = this.selectComponent('#fund')
        let errorMessage = ''
        if (fundComponent) {
            if (!fundComponent.data.principal || fundComponent.data.principal <= 0) {
                errorMessage = '公积金金额应大于0元'
            } else if (fundComponent.data.rate <= 0) {
                errorMessage = '公积金利率值应大于0元'
            }
        }
        if (commeryComponent) {
            if (!commeryComponent.data.principal || commeryComponent.data.principal <= 0) {
                errorMessage = '商贷金额应大于0元'
            } else if (commeryComponent.data.lpr <= 0) {
                errorMessage = 'lpr值应大于0元'
            } else if (commeryComponent.data.rate <= 0) {
                errorMessage = '商贷利率值应大于0元'
            }
        }
        if (errorMessage) {
            return Toast({
                context: this,
                selector: '#t-toast',
                message: errorMessage
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