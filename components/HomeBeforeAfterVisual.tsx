type HomeBeforeAfterVisualProps = {
  images: {
    src: string;
    alt: string;
    label: string;
  }[];
  videoSrc?: string;
  videoTitle?: string;
  videoBody?: string;
  videoPoints?: string[];
};

export function HomeBeforeAfterVisual({
  images,
  videoSrc,
  videoTitle,
  videoBody,
  videoPoints,
}: HomeBeforeAfterVisualProps) {
  return (
    <div className="grid w-full gap-12">
      {images.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-3">
          {images.map((image) => (
            <div key={image.src}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-muted">
                {image.label}
              </p>
              <div className="h-[520px] overflow-hidden rounded-[28px] border border-line bg-black shadow-xl md:h-[620px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {videoSrc ? (
        <div className="grid w-full gap-12 border-t border-line pt-10 md:grid-cols-[minmax(0,440px)_minmax(0,1fr)] md:items-start lg:gap-20">
          <div>
            {videoTitle ? (
              <h3 className="text-2xl font-semibold leading-tight tracking-[-.02em] md:text-3xl">
                {videoTitle}
              </h3>
            ) : null}
            {videoBody ? <p className="mt-5 text-lg leading-8 text-muted">{videoBody}</p> : null}
            {videoPoints ? (
              <div className="mt-7 grid gap-3">
                {videoPoints.map((point) => (
                  <div key={point} className="flex gap-4 border-t border-line pt-3 text-sm leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="w-full max-w-[260px] justify-self-start md:max-w-[300px] md:justify-self-end">
            <video
              className="w-full rounded-[20px] bg-black shadow-xl"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
