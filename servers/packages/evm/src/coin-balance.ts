import { createPublicClient, http, formatEther, type Chain } from 'viem';
import { mainnet, bsc, polygon } from 'viem/chains';

/**
 * 查询地址的原生代币余额
 * @param address - 要查询的钱包地址
 * @param chainName - 链名称（可选，默认为以太坊主网）
 * @returns 返回余额（单位：ETH/BNB/MATIC 等）
 */
export async function getNativeCoinBalance(address: string, chainName?: string): Promise<string> {
  try {
    // 根据 chainId 选择对应的链配置
    let chain: Chain = mainnet; // 默认以太坊主网
    if (chainName === 'bsc') chain = bsc;
    if (chainName === 'polygon') chain = polygon;

    // 创建公共客户端
    const client = createPublicClient({
      chain,
      transport: http(),
    });
    // 获取余额
    const balanceWei = await client.getBalance({ address: address as `0x${string}` });
    return formatEther(balanceWei);
  } catch (error: unknown) {
    throw new Error(`获取余额失败: ${(error as Error).message}`);
  }
}
