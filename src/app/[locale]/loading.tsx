import { SpaceLoader } from "@/components/loaders/space-loader"

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <SpaceLoader size='lg' variant='fullscreen' />
    </div>
  )
}