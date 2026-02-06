import { cn } from "@/components/ui/cn";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-widest text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {children}
    </section>
  );
}
