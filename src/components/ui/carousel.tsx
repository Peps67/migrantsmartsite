"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

function Carousel({
  opts,
  plugins,
  setApi,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    // Sync initial prev/next button state from the embla instance, then
    // subscribe to further changes below.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        data-slot="carousel"
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        data-slot="carousel-content"
        className={cn("flex -ml-4 md:-ml-6", className)}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="carousel-item"
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 pl-4 md:pl-6", className)}
      {...props}
    />
  );
}

function CarouselPrevious({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      data-slot="carousel-previous"
      variant="outline"
      size="icon"
      className={cn("rounded-full", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous"
      {...props}
    >
      <ArrowLeft size={18} weight="bold" />
    </Button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      data-slot="carousel-next"
      variant="outline"
      size="icon"
      className={cn("rounded-full", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next"
      {...props}
    >
      <ArrowRight size={18} weight="bold" />
    </Button>
  );
}

export {
  useCarousel,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
