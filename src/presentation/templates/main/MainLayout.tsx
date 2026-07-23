"use client"
import Header from "@/presentation/organisms/layout/Header";
import FooterSection from "@/presentation/atoms/home/sections/FooterSection";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <FooterSection />
    </div>
  )
}
