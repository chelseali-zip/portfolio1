import Image from "next/image";

type VisualProps = {
  src?: string;
  label: string;
  aspect?: "wide" | "tall" | "square" | "hero" | "banner";
  dark?: boolean;
};

export function Visual({ src, label, aspect = "wide", dark = false }: VisualProps) {
  const isVideo = src ? /\.(mov|mp4|webm)$/i.test(src) : false;
  const ratio =
    aspect === "hero"
      ? "aspect-[16/9]"
      : aspect === "banner"
        ? "aspect-[16/7]"
      : aspect === "tall"
        ? "aspect-[4/5]"
        : aspect === "square"
          ? "aspect-square"
          : "aspect-[16/10]";

  return (
    <div
      className={`${ratio} group relative overflow-hidden rounded-[28px] border border-line ${
        dark ? "bg-ink text-white" : "bg-[#F7F7F5] text-ink"
      }`}
    >
      {src && isVideo ? (
        <video
          src={src}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      ) : src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 ease-editorial group-hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-8">
          <div className="grid h-3/4 w-3/4 grid-cols-6 grid-rows-5 gap-3 opacity-80">
            {Array.from({ length: 30 }).map((_, index) => (
              <span key={index} className="border border-current/15 bg-current/[.025]" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
