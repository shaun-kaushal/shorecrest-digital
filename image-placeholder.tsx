import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  label = "Image placeholder",
  className = "aspect-[4/5]",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gold/40 bg-card/60 text-muted-foreground ${className}`}
    >
      <ImageIcon className="h-10 w-10 text-gold/70" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
