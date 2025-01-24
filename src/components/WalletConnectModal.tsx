import { Circle } from "lucide-react"
import { Button } from "@/components/ui/button"

const wallets = [
  {
    name: "Argent Mobile Phone",
    icon: Circle,
  },
  {
    name: "Argent Web",
    icon: Circle,
  },
  {
    name: "Braavos",
    icon: Circle,
  },
]

export function WalletSelectorUI() {
  return (
    <div className="absolute top-4 right-1 w-[300px] rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-lg">
      <h2 className="mb-4 text-sm font-semibold text-neutral-400">SELECT WALLET</h2>
      <div className="flex flex-col gap-2">
        {wallets.map((wallet) => (
          <Button
            key={wallet.name}
            variant="ghost"
            className="w-full justify-start gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-6 text-neutral-200 hover:bg-neutral-800"
          >
            <wallet.icon className="h-5 w-5 text-orange-400" />
            <span>{wallet.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

