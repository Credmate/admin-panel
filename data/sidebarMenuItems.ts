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
  {
    icon: "/user.svg",
    label: "User Management",
    path: "/dashboard/usermanagement",
  },
  {
    icon: "/verify.svg",
    label: "Verify Payments",
    path: "/dashboard/verifypayments",
  },
  { icon: "/settings.svg", label: "Settings", path: "/dashboard/settings" },
];