// lpCalculator.js

/**
 * Kira keperluan liquidity pool untuk token 80/20 seperti Balancer
 * @param {number} devcoinAmount - Jumlah DEVCOIN yang ingin dimasukkan
 * @param {number} devcoinPrice - Harga 1 DEVCOIN dalam USD
 * @param {number} devcoinRatio - Peratusan DEVCOIN dalam pool (contoh: 0.8 untuk 80%)
 * @returns {{ usdtRequired: number, totalValueUSD: number }}
 */
function calculateLiquidityPool(devcoinAmount, devcoinPrice, devcoinRatio = 0.8) {
  const devcoinValue = devcoinAmount * devcoinPrice;
  const totalValue = devcoinValue / devcoinRatio;
  const usdtRequired = totalValue * (1 - devcoinRatio);

  return {
    usdtRequired: parseFloat(usdtRequired.toFixed(2)),
    totalValueUSD: parseFloat(totalValue.toFixed(2))
  };
}

// Contoh penggunaan:
const result = calculateLiquidityPool(100, 0.20);
console.log(`USDT diperlukan: $${result.usdtRequired}`);
console.log(`Total nilai pool: $${result.totalValueUSD}`);

module.exports = calculateLiquidityPool;
