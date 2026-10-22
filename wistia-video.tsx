import { useEffect, useRef } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": { "media-id": string; aspect?: string; class?: string };
    }
  }
}

function loadScript(src: string, module = false) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement("script");
  el.src = src;
  el.async = true;
  if (module) el.type = "module";
  document.head.appendChild(el);
}

/** Wistia's standard player embed, with the blurred swatch shown while it loads. */
export function WistiaVideo({ id, bare = false }: { id: string; bare?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  // Wistia's player is heavy, so only load it when the video is near the screen.
  useEffect(() => {
    const el = ref.current;
    const load = () => {
      loadScript("https://fast.wistia.com/player.js");
      loadScript(`https://fast.wistia.com/embed/${id}.js`, true);
    };
    if (!el || !("IntersectionObserver" in window)) {
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
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id]);

  return (
    <div ref={ref} className={bare ? "" : "overflow-hidden rounded-lg border border-border bg-card"}>
      <style>{`wistia-player[media-id='${id}']:not(:defined){background:center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch');display:block;filter:blur(5px);padding-top:56.25%;}`}</style>
      <wistia-player media-id={id} aspect="1.7777777777777777" />
    </div>
  );
}
