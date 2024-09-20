import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import { mainnet, sepolia, base, baseSepolia } from "wagmi/chains";

import { toPrivyWallet } from "@privy-io/cross-app-connect";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        toPrivyWallet({
          id: "clgzbctl300bzl808t9kh4dpg", // The Privy app id of provider application
          name: "Icebreaker", // The name of the provider application
          iconUrl:
            "https://icebreaker-nft-images.s3.amazonaws.com/icebreaker_privy_320x80%401x.png", // The icon to appear in the connector modal
        }),
      ],
    },
  ],
  {
    appName: "Privy",
    projectId: "Example",
  }
);

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, base, baseSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
  connectors,
  ssr: true,
});
