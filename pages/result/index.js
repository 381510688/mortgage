// pages/result/index.js
import {loanCalculator, portfolioLoanCalculator} from '../../utils/compute'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentLoanType: '', // 当前贷款类型
        currentType: '0',
        commeryData: {},
        fundData: {},
        result: {}
    },

    onTabsClick (event) {
        let key = event.detail.value;
        this.setData({
            currentType: key
        })
        let result = {};
        switch (this.data.currentLoanType) {
            case 'commery':
                result = loanCalculator(this.data.commeryData, key);
                break;
            case 'fund':
                result = loanCalculator(this.data.fundData, key);
                break;
            case 'portfolio':
                result = portfolioLoanCalculator(this.data.commeryData, this.data.fundData, key);
                break;
        }
        this.setData({result})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // commery|fund|portfolio
        let currentLoanType = options.currentLoanType;  // 商业贷款、公积金贷款、组合贷款
        this.setData({
            commeryData: JSON.parse(options.commeryData),
            fundData: JSON.parse(options.fundData),
            currentLoanType
        })
        this.onTabsClick({detail:{value: '0'}});
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