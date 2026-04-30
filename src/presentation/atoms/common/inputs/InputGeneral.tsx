import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface InputGeneralProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  name?: string
  id?: string
}

export default function InputGeneral({ label, placeholder, value, onChange, type, name, id }: InputGeneralProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  )
}