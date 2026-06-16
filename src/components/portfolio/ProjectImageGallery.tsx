"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { ProjectImage } from "@/data/projects";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ProjectImageGalleryProps = {
  images: ProjectImage[];
  open: boolean;
  startIndex: number;
  onOpenChange: (open: boolean) => void;
};

export function ProjectImageGallery({
  images,
  open,
  startIndex,
  onOpenChange,
}: ProjectImageGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    if (!open) return;
    setCurrent(startIndex);
    api?.scrollTo(startIndex, true);
  }, [open, startIndex, api]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (images.length === 0) return null;

  const active = images[current];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "fixed inset-0 z-50 flex h-dvh w-dvw max-w-none translate-x-0 translate-y-0 flex-col gap-0",
          "border-0 bg-background p-0 shadow-none sm:rounded-none",
          "data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100",
          "[&>button.absolute]:hidden",
        )}
      >
        <DialogTitle className="sr-only">Project screenshots</DialogTitle>

        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 bg-background/80 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{active?.alt}</p>
            {active?.caption && (
              <p className="mt-0.5 truncate text-xs text-muted-foreground">{active.caption}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <p className="text-xs tabular-nums text-muted-foreground">
              {current + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close gallery"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ startIndex, loop: images.length > 1 }}
          className="flex h-full min-h-0 flex-1 flex-col [&>div:first-child]:h-full [&>div:first-child]:overflow-hidden"
        >
          <CarouselContent className="ml-0 h-full">
            {images.map((image) => (
              <CarouselItem key={image.src} className="h-full basis-full pl-0">
                <div className="flex h-full min-h-dvh items-center justify-center px-4 pb-6 pt-16 sm:px-12 sm:pt-20 sm:pb-10">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[calc(100dvh-5.5rem)] max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-brand/50 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:border-brand/50 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
