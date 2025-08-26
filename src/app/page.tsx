'use client'
import { useWalletUi, useWalletUiWallets } from "@wallet-ui/react";

export default function Home() {
  const walletUi = useWalletUi()
  const wallets = useWalletUiWallets()
  return (
    <div>
      <main>
        <div>
          <h2 className="text-2xl font-bold">useWalletUI</h2>
          <pre className="text-sm font-mono">{JSON.stringify(walletUi, null, 2)}</pre>      
        </div>
        <div>
          <h2 className="text-2xl font-bold">useWalletUiWallets</h2>
          <pre className="text-sm font-mono">{JSON.stringify(wallets, null, 2)}</pre>
        </div>
      </main>
    </div>
  );
}
