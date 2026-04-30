import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { ClipboardList, FileCheck, FileText } from "lucide-react"

export default function SteepsSection() {
 
  return (
    <SectionLayout
      id="steeps"
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      lightBackground="#F4F7FC"
      lightAccent="#2F62B8"
      lightMutedText="#4D5C74"
      className="py-20 md:py-24"
    >
         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(1,169,255,0.2),transparent_50%)]" />
      <div className="relative overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0" />
        <div className="mx-auto w-[90%] max-w-[1120px]">
        <BadgeGeneral badge_text="Proceso" />
          <div className="mx-auto max-w-3xl text-center">
         

          <TitleSection
            as="h2"
            line1="Asi de"
            line2="simple."
            inlineLine2
            className="font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#4688D4]"
          />

            
            <p className="mx-auto mt-5  text-sm text-[#B9C6DD] md:text-base">
            Sin burocracia. Sin desplazamientos. Sin sorpresas.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-8 hidden h-[8px] rounded-full border border-[#6FA8FF]/25 bg-[repeating-linear-gradient(115deg,rgba(143,193,255,0.36)_0_3px,rgba(28,50,93,0.08)_3px_8px)] md:block" />
           
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
