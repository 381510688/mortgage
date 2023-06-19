
/**
 * 纯商贷计算
 * @param {*} data 
 * @param {*} type 0:等额本息；1:等额本金
 */
function computeCommery (data, type) {
    let {principal, timeLimitValue, rate} = data;
    let P = +principal * 10000;
    let i = rate / 100 / 12; // 月利率
    let n = timeLimitValue * 12; // 期数
    let Y = (P * Math.pow((1 + i), n) * i) / (Math.pow((1 + i), n) - 1);  // 月供
    let S = n * Y; // 累计还款
    let I = S - P;  // 累计利息
    console.log(Y, S, I)

}

export {
    computeCommery
}