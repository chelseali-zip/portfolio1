type ScrollableVisualProps = {
  images: {
    src: string;
    alt: string;
    label?: string;
  }[];
  dark?: boolean;
};

export function ScrollableVisual({ images }: ScrollableVisualProps) {
  const isPair = images.length === 2;

  return (
    <div
      className={
        isPair
          ? "flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12"
          : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {images.map((image) => {
        const isVideo = /\.(mov|mp4|webm)$/i.test(image.src);

        return (
          <div
            key={image.src}
            className={
              isPair
                ? "w-full max-w-[260px] self-center sm:self-auto md:max-w-[300px]"
                : "mx-auto w-full max-w-[260px] md:max-w-[300px]"
            }
          >
            {image.label ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-muted">
                {image.label}
              </p>
            ) : null}
            {isVideo ? (
              <video
                className="block w-full rounded-[20px] bg-black shadow-xl"
                src={image.src}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="block h-auto w-full rounded-[20px] bg-black shadow-xl"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
