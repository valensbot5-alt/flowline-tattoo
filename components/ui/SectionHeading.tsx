type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center lg:mb-14">
      <h2 className={`font-sans text-3xl font-bold tracking-tight lg:text-4xl ${light ? "text-light-text" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base lg:text-lg ${light ? "text-light-text/70" : "text-foreground/70"}`}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
    </div>
  );
}
