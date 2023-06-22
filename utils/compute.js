/**
 * 贷款计算
 * @param {*} data 
 * @param {*} type 0:等额本息；1:等额本金
 */
function loanCalculator (data, type) {
    let {principal, timeLimitValue, rate} = data;
    let P = +principal * 10000;
    let i = rate / 100 / 12; // 月利率
    let n = timeLimitValue * 12; // 期数
    let Y, S, I, details = [];
    switch (type) {
        case '0':
            let _temp1 = Math.pow((i + 1), n)
            Y = (P * _temp1 * i) / (_temp1 - 1);  // 月供
            S = n * Y;  // 累计还款
            I = S - P;  // 累计利息
            for (let k = 1; k <= n; k++) {
                let Yp = Math.pow((1 + i), (k - 1)) * (Y - i * P);
                let Yi = Y - Yp;
                let Pr = Math.pow((1 + i), k) * (P - Y/i) + Y/i;
                details.push({
                    Yt: Yp + Yi, // 月供总额
                    Yp, // 月供本金
                    Yi, // 月供利息
                    Pr, // 剩余本金
                })
            }
            break;
        case '1':
            Y = i * (P - P / n * (1 - 1)) + P / n;
            S = P * i * ((n + 1) / 2) + P;
            I = S - P; 
            for (let k = 1; k <= n; k++) {
                let Yp = P / n;
                let Yi = i * (P - P / n * (k - 1));
                let Pr = P - P / n * k;
                details.push({
                    Yt: Yp + Yi, // 月供总额
                    Yp, // 月供本金
                    Yi, // 月供利息
                    Pr, // 剩余本金
                })
            }
            break;
        case '2': 
            let _temp2 = Math.pow((1 + i), n)
            let Y1 = (P * _temp2 * i) / (_temp2 - 1);  // 月供
            let S1 = n * Y1;  // 累计还款
            let I1 = S1 - P;  // 累计利息
            let S2 = P * i * ((n + 1) / 2) + P;
            let I2 = S2 - P; 
            let Y2_1 = P / n + i * (P - P / n * (1 - 1));
            let Y2_2 = P / n + i * (P - P / n * (2 - 1));
            let Y2_n = P / n + i * (P - P / n * (n - 1));
            return {
                P, S1, I1, Y1, S2, I2, Y2_1, Y2_2, Y2_n
            }

    }
    console.log(P, Y, S, I, details)
    return {
        P, Y, S, I, details
    }
}

/**
 * 组合贷款
 */
function portfolioLoanCalculator (data1, data2, type) {
    let result = [];
    result.push(loanCalculator(data1, type), loanCalculator(data2, type));
    return result;
}


export {
    loanCalculator,
    portfolioLoanCalculator
}