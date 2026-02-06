import Link from "next/link";
import { cn } from "@/components/ui/cn";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/20";
  const styles: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-zinc-800",
    secondary:
      "bg-white text-black ring-1 ring-zinc-200 hover:bg-zinc-50 hover:ring-zinc-300",
    ghost: "bg-transparent text-black hover:bg-zinc-100",
  };

  const cls = cn(base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
