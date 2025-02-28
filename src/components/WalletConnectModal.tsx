"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useWalletContext } from "@/app/useContext/WalletContext";
import ArgentImg from "@/public/ArgentImg.svg";
import Braavos from "@/public/Braavos.svg";

const wallets = [
  {
    name: "Argent Mobile Phone",
    icon: ArgentImg,
    id: "argentX",
  },
  {
    name: "Argent Web",
    icon: ArgentImg,
    id: "argentWeb",
  },
  {
    name: "Braavos",
    icon: Braavos,
    id: "braavos",
  },
];

interface WalletSelectorUIProps {
  onClose: () => void;
}

export function WalletSelectorUI({ onClose }: WalletSelectorUIProps) {
  const { account, connectWallet, disconnectWallet } = useWalletContext();

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      onClose();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="absolute top-4 right-1 w-[300px] rounded-lg border border-neutral-800 bg-neutral-900/80 p-4">
      {account ? (
        <>
          <h2 className="mb-4 text-sm font-semibold text-neutral-400">
            CONNECTED WALLET
          </h2>
          <div className="mb-4 text-sm text-neutral-200">Address: {account}</div>
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-6 text-neutral-200 hover:bg-neutral-800 hover:text-white"
            onClick={() => {
              disconnectWallet();
              onClose(); // Optionally close the modal after disconnecting
            }}
          >
            Disconnect Wallet
          </Button>
        </>
      ) : (
        <>
          <h2 className="mb-4 text-sm font-semibold text-neutral-400">
            SELECT WALLET
          </h2>
          <div className="flex flex-col gap-2">
            {wallets.map((wallet) => (
              <Button
                key={wallet.name}
                variant="ghost"
                className="w-full justify-start gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-6 text-neutral-200 hover:bg-neutral-800 hover:text-white"
                onClick={() => handleConnectWallet()}
              >
                <Image src={wallet.icon} alt={wallet.name} />
                <span>{wallet.name}</span>
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}