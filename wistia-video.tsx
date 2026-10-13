import { useEffect } from "react";

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
  useEffect(() => {
    loadScript("https://fast.wistia.com/player.js");
    loadScript(`https://fast.wistia.com/embed/${id}.js`, true);
  }, [id]);

  return (
    <div className={bare ? "" : "overflow-hidden rounded-lg border border-border bg-card"}>
      <style>{`wistia-player[media-id='${id}']:not(:defined){background:center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch');display:block;filter:blur(5px);padding-top:56.25%;}`}</style>
      <wistia-player media-id={id} aspect="1.7777777777777777" />
    </div>
  );
}
