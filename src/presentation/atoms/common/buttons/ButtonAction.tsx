import { Button } from "@/components/ui/button"
import { PremiumLoader } from "@/components/loaders/premium-loader"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface ButtonActionProps {
  onClick: () => Promise<void>
  variant: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
  size: "default" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"
  className?: string
  disabled?: boolean
  loading?: boolean
  text?: string
}


export default function ButtonAction({
  onClick,
  variant,
  size,
  className,
  disabled,
  loading,
  text = 'Click me',
}: ButtonActionProps) {

  const handleClick = async () => {
    await onClick()
  }

  return (
    <div
      className={cn(
        "font-euclid font-regular inline-flex bg-linear-to-r from-[#0A0E27] to-[#4688D4] text-white rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(70,136,212,0.35)] hover:-translate-y-0.5",
        className
      )}
    >
      {
        loading ? (
          <PremiumLoader variant='default' size='md' text={"Loading..."} />
        ) : (
          <Button
            className="group font-euclid font-regular bg-transparent hover:bg-transparent flex justify-between items-center rounded-full h-auto min-h-0 transition-transform duration-300"
            onClick={handleClick}
            variant={variant}
            size={size}
            disabled={disabled}
          >
            <span className="font-regular">{text.toUpperCase()}</span>
            <div className="bg-white h-10 w-10 flex items-center justify-center text-[#0A0E27] rounded-full transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </div>
          </Button>
        )
      }
    </div>
  )
}
