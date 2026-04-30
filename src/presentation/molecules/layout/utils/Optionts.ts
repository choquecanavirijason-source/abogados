import {
  LucideIcon,
  Cog,
  CircleDot,
  HandCoins,
  CircleHelp,
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
      name: "Servicios",
      translationKey: "services",
      kind: "section",
      sectionId: "services",
      icon: Cog,
      visible: () => true,
      isIconVisible: () => false,
    },
    {
      name: "Proceso",
      translationKey: "process",
      kind: "section",
      sectionId: "process",
      icon: CircleDot,
      visible: () => true,
      isIconVisible: () => false,
    },
    {
      name: "Precios",
      translationKey: "pricing",
      kind: "section",
      sectionId: "pricing",
      icon: HandCoins,
      visible: () => true,
      isIconVisible: () => false,
    },
    {
      name: "FAQ",
      translationKey: "faq",
      kind: "section",
      sectionId: "faq",
      icon: CircleHelp,
      visible: () => true,
      isIconVisible: () => false,
    },
    {
      name: "Diario Oficial de la Federacion",
      translationKey: "dof",
      kind: "route",
      route: "/diario-oficial-federacion",
      icon: CircleHelp,
      visible: () => true,
      isIconVisible: () => false,
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
