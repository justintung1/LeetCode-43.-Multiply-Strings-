/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    let n1=BigInt(num1);
    let n2=BigInt(num2);
    let ans=BigInt(n1*n2);
    let final=String(ans);
    return final;
};