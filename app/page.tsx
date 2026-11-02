'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const { address, chain, isConnected } = useAccount();

  return (
    <main className="portal">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Stellar Gaming Hub home">
          <span className="wordmark-icon" aria-hidden="true">S</span>
          <span>STELLAR<span className="wordmark-light"> / HUB</span></span>
        </a>
        <span className="topbar-label">PLAYER ACCESS <span aria-hidden="true">01</span></span>
      </header>

      <section className="welcome" aria-labelledby="welcome-title">
        <p className="eyebrow"><span className="status-dot" /> WEB3 ARCADE · WALLET GATEWAY</p>
        <h1 id="welcome-title">Your next<br />game starts here.</h1>
        <p className="intro">Connect a wallet to enter the hub and explore games, assets, and on-chain rewards.</p>

        <div className="connect-area">
          <ConnectButton showBalance={false} chainStatus="icon" accountStatus="address" />
        </div>

        <div className="connection-status" aria-live="polite">
          <span className={`status-mark${isConnected ? ' is-connected' : ''}`} aria-hidden="true" />
          <span>{isConnected ? 'WALLET CONNECTED' : 'WALLET NOT CONNECTED'}</span>
          {isConnected && <span className="chain-label">{chain?.name} · {address?.slice(0, 6)}…{address?.slice(-4)}</span>}
        </div>
      </section>

      <footer className="footer">
        <span>STELLAR GAMING HUB</span>
        <span>POWERED BY WAGMI + VIEM</span>
      </footer>
    </main>
  );
}