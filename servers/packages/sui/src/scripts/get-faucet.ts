import { getFaucet } from "../tools/faucet.js";

// 使用示例
async function runGetFaucet() {
    const address = "0xe5ae133b05ce17685d98817231c21fa2bc1777ea7da45cb2bd265dc52a96d5c3";
    const network = "devnet";

    const result = await getFaucet(address, network)
    console.log(result)
}

async function run() {
    await runGetFaucet()
}

run().catch(console.error)