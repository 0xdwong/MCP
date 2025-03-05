import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getNativeCoinBalance } from "./coin-balance.js";
// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});


server.tool(
  "evm-native-balance",
  {
    address: z.string(),
    chainName: z.string().optional()
  },
  async ({ address, chainName }) => {
    const balance = await getNativeCoinBalance(address, chainName);
    
    return {
      content: [{
        type: "text",
        text: String(balance)
      }]
    }
  }
);


async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("EVM MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});