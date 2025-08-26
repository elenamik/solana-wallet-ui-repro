import { WalletUi ,createSolanaDevnet, createSolanaMainnet} from '@wallet-ui/react';

const config = {
    clusters: [createSolanaDevnet(), createSolanaMainnet()],
}

export const SolanaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <WalletUi config={config}>{children}</WalletUi>;
};
