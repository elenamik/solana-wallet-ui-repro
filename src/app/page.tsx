'use client'
import { useWalletUi, useWalletUiWallets, useWalletUiSigner, WalletUiDropdown } from "@wallet-ui/react";

export default function Home() {
  const { account} = useWalletUi()
  console.log('account', account)

  const wallets = useWalletUiWallets()
  console.log('wallets', wallets)
  const signer = useWalletUiSigner();

  return (
    <div>
      <main>
        <div>
          <h2 className="text-2xl font-bold">Test app</h2>
          <WalletUiDropdown />
        </div>
      </main>
    </div>
  );
}
