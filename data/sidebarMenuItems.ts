import { MenuItem } from "@/interface/interface";

export const menuItems: MenuItem[] = [
  {
    icon: "/borrower.svg",
    label: "Borrowers",
    path: "/dashboard/borrower",
  },
  { icon: "/lender.svg", label: "Lenders", path: "/dashboard/lender" },
  { icon: "/report.svg", label: "Reports", path: "/dashboard/reports" },
  {
    icon: "/fraud.svg",
    label: "Fraud Prevention",
    path: "/dashboard/fraudprevention",
  },
  { icon: "/settings.svg", label: "Settings", path: "/dashboard/settings" },
];