import type { HTMLAttributes } from "react";

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children, className = "", ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-primary underline hover:bg-primary/10 hover:rounded-sm transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
