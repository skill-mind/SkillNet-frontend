import { Button } from "@/components/ui/button"
import ArgentImg from "@/public/ArgentImg.svg"
import Braavos from "@/public/Braavos.svg"
import Image from "next/image"

const wallets = [
    {
        name: "Argent Mobile Phone",
        icon: ArgentImg,
    },
    {
        name: "Argent Web",
        icon: ArgentImg,
    },
    {
        name: "Braavos",
        icon: Braavos,
    },
]

export function WalletSelectorUI() {
    return (
        <div className="absolute top-4 right-1 w-[300px] rounded-lg border border-neutral-800 bg-neutral-900/80 p-4">
            <h2 className="mb-4 text-sm font-semibold text-neutral-400">SELECT WALLET</h2>
            <div className="flex flex-col gap-2">
                {wallets.map((wallet) => (
                    <Button
                        key={wallet.name}
                        variant="ghost"
                        className="w-full justify-start gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-6 text-neutral-200 hover:bg-neutral-800 hover:text-white"
                    >
                        <Image src={wallet.icon} alt={wallet.name} />
                        <span>{wallet.name}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
