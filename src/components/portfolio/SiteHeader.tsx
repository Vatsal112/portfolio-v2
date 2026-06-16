import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";

type SiteHeaderProps = {
  backLabel?: string;
  backTo?: string;
};

export function SiteHeader({ backLabel = "Back to work", backTo = "/#projects" }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href={backTo}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{backLabel}</span>
          </Link>

          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-brand-gradient text-brand-foreground">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="hidden md:inline">Vatsal Dendpara</span>
          </Link>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
