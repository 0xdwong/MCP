# MCP Sui Tools

这是一个基于 Sui 区块链的 MCP（Model Context Protocol）工具集。该项目提供了与 Sui 区块链交互的功能，并集成了 MCP SDK 来实现模型上下文协议的功能。

## 项目特点

- 基于 TypeScript 开发
- 集成 Sui 区块链功能
- 提供完整的构建脚本

## 依赖项

主要依赖：

- @modelcontextprotocol/sdk: ^1.6.1
- @mysten/sui: ^1.24.0

开发依赖：

- @modelcontextprotocol/inspector: ^0.6.0
- TypeScript 相关工具

## MCP 工具

当前项目包含以下 MCP 工具：

1. Faucet 测试网工具
   - 功能：用于在 Sui 测试网上获取测试代币
   - 使用场景：开发测试和功能验证
   - 特点：
     - 支持自动获取测试网 SUI 代币
     - 内置请求限制和错误处理
     - 支持多地址管理
