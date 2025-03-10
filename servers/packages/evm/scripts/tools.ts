import { getNativeCoinBalance } from "../src/coin-balance.js";

// 使用示例
async function runGetNativeCoinBalance() {
    const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

    // 查询以太坊主网余额
    const ethBalance = await getNativeCoinBalance(address);
    console.log(`ETH 余额: ${ethBalance}`);

    // 查询 BSC 余额
    const bnbBalance = await getNativeCoinBalance(address, "bsc");
    console.log(`BNB 余额: ${bnbBalance}`);
}



async function run() {
    await runGetNativeCoinBalance()
}


run().catch(console.error)