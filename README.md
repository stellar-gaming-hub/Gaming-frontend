<p align="center">
  <a href="https://github.com/stellar-gaming-hub" target="blank">
    <img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f3ae.svg" width="120" alt="Stellar Gaming Hub Logo" />
  </a>
</p>

# Stellar Gaming Hub: Frontend API & Client Portal

### IMPORTANT: Never expose private key configurations in production client environments. Always route web3 RPC calls through secure proxies.

A modern, responsive Next.js and TypeScript Web3 frontend platform for discovering games, managing digital assets, and supporting gaming creators through continuous funding streams.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/stellar-gaming-hub/Gaming-frontend/blob/main/LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/stellar-gaming-hub/Gaming-frontend)
[![Drips Protocol](https://img.shields.io/badge/Funding-Drips_Protocol-blue.svg)](https://drips.network)
[![Node Version](https://img.shields.io/badge/Node-%3E%3D20.9.0-brightgreen.svg)](https://nodejs.org/)

---

## Description

**Stellar Gaming Hub Frontend** provides an open-source gateway for players to explore web3 titles, track achievement badges, interact with on-chain leaderboards, and stream ERC-20 token rewards directly to game repositories.

---

## Wallet Connection

The home page uses RainbowKit with Wagmi and Viem to provide a wallet connection modal for MetaMask, WalletConnect, and Coinbase Wallet. The app supports Ethereum Mainnet and Sepolia.

Use Node.js 20.9 or later, then configure a WalletConnect project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/) and start the app:

```bash
npm install
```

Add the project ID to `.env.local`:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

Then run `npm run dev` and open `http://localhost:3000`. The project ID is public configuration; never put private keys in client-side environment variables.

---

## Game Session & Status API

### New Feature: Secure Session State Retrieval & Drips Stream Tracking

Stellar Gaming Hub now includes a secure, documented state retrieval endpoint with stable session tracking for multi-chain game instances.

**Endpoint:** `GET /api/v1/session/:id/status`

#### Key Features:
* **Stable States:** Versioned session states (`INITIALIZED`, `AUTHENTICATED`, `IN_GAME`, `STREAMING_ACTIVE`, `COMPLETED`, `FAILED`, `CANCELLED`).
* **Chain References:** Detailed chain information including EVM RPC responses, transaction hashes, block numbers, and confirmation timestamps.
* **Security:** Protected by API authentication via `WalletSignatureGuard` with client rate limiting.
* **Query Options:** Configurable responses with `includeDripsDetails` and `includeAssetMetadata` parameters.
* **Error Handling:** Graceful degradation for missing chain network information.

#### Example Usage:

```bash
curl -H "Authorization: Bearer YOUR_WALLET_TOKEN" \
  "http://localhost:3000/api/v1/session/sess_123/status?includeDripsDetails=true"
