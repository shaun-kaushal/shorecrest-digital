import { useEffect, useRef } from "react";

/**
 * A muted, looping video that behaves like a GIF but is a fraction of the size.
 * The poster frame is in the HTML; the video file only downloads when it
 * scrolls near the screen.
 */
export function LazyVideo({
  src,
  poster,
  width,
  height,
  label,
}: {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const load = () => {
      if (video.src) return;
      video.src = src;
      video.play().catch(() => {});
    };
    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className="block h-auto w-full"
    />
  );
}
