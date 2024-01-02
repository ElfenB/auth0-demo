import { Link } from "@mui/material";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export function A({ children, href }: Props) {
  return (
    <Link href={href} rel="noreferrer" target="_blank" underline="none">
      {children}
    </Link>
  );
}
