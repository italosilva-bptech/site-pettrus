import Image from "next/image"

export function PettrusLogo({ className = "", variant = "default" }: { className?: string; variant?: "default" | "white" }) {
  return (
    <Image
      src="/logo-pettrus.svg"
      alt="Pettrus Proteção Veicular"
      width={180}
      height={52}
      className={`${className} ${variant === "white" ? "brightness-0 invert" : ""}`}
      priority
    />
  )
}
