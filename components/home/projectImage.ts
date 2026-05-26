import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/types/project";

export function getProjectImage(photo: Project["photos"][number] | string | undefined) {
  if (!photo) return "/og-image.png";
  return typeof photo === "string"
    ? photo
    : urlFor(photo).width(1800).height(1200).url();
}
