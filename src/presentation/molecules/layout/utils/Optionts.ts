import {
  LucideIcon,
  Home,
  Scale,
  ClipboardList,
  // HandCoins,
  MessageCircleQuestion,
  ScrollText,
  Newspaper,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { IconType } from "react-icons";

export interface NavigationSubItem {
  name: string;
  translationKey?: string;
  kind: "route" | "section";
  route?: string;
  sectionId?: string;
  icon?: LucideIcon | IconType;
  visible: () => boolean;
  isIconVisible?: () => boolean;
}

export interface NavigationItem {
  name: string;
  translationKey?: string;
  kind: "route" | "section" | "dropdown" | "theme-toggle";
  route?: string;
  sectionId?: string;
  icon?: LucideIcon | IconType;
  visible: () => boolean;
  subitems?: NavigationSubItem[];
  isIconVisible?: () => boolean;
}

export default function HeaderOptions() {
  const navigationItems: NavigationItem[] = [
    {
      name: "Inicio",
      translationKey: "home",
      kind: "section",
      sectionId: "hero",
      icon: Home,
      visible: () => true,
      isIconVisible: () => true,
    },
    {
      name: "Servicios",
      translationKey: "services",
      kind: "section",
      sectionId: "services",
      icon: Scale,
      visible: () => true,
      isIconVisible: () => true,
    },
    {
      name: "Proceso",
      translationKey: "process",
      kind: "section",
      sectionId: "process",
      icon: ClipboardList,
      visible: () => true,
      isIconVisible: () => true,
    },
    // {
    //   name: "Precios",
    //   translationKey: "pricing",
    //   kind: "section",
    //   sectionId: "pricing",
    //   icon: HandCoins,
    //   visible: () => true,
    //   isIconVisible: () => true,
    // },
    {
      name: "FAQ",
      translationKey: "faq",
      kind: "section",
      sectionId: "faq",
      icon: MessageCircleQuestion,
      visible: () => true,
      isIconVisible: () => true,
    },
    {
      name: "Diario Oficial de la Federación",
      translationKey: "dof",
      kind: "route",
      route: "/diario-oficial-federacion",
      icon: Newspaper,
      visible: () => true,
      isIconVisible: () => true,
    },
    {
      name: "Empresa",
      translationKey: "company",
      kind: "dropdown",
      icon: Landmark,
      visible: () => true,
      isIconVisible: () => true,
      subitems: [
        {
          name: "Términos y condiciones",
          translationKey: "terms",
          kind: "route",
          route: "/company/terms",
          icon: ScrollText,
          visible: () => true,
          isIconVisible: () => true,
        },
        {
          name: "Aviso de privacidad integral",
          translationKey: "privacy",
          kind: "route",
          route: "/company/legal",
          icon: ShieldCheck,
          visible: () => true,
          isIconVisible: () => true,
        },
      ],
    },
  ];

  return navigationItems
    .filter((item) => item.visible())
    .map((item) => {
      if (!item.subitems) return item;
      const filteredSubitems = item.subitems.filter((sub) => sub.visible());
      return { ...item, subitems: filteredSubitems.length > 0 ? filteredSubitems : undefined };
    });
}
