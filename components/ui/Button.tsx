import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-sm px-6 py-3 text-base font-bold transition-colors min-h-[48px]";
  const variants = {
    primary: "bg-secondary text-primary hover:bg-accent",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
