'use client';
import { normalizeImage } from '@/features/libs/normalizeImage';
import { detailsIcons } from '@/features/shared/gameDetailsIcons';
import Gallery from '@/games/components/ui/Gallery';

export default function ImageGallery({ images }: { images: string[] }) {
  const { Gallery: GalleryIcon } = detailsIcons;
  const screenshotsList = images
    .map((image) => normalizeImage(image.replace('t_thumb', 't_1080p')))
    .filter((image): image is string => image !== null);
  return (
    <div className="mt-12 space-y-4 rounded-2xl border border-white/10 bg-(--color-bg-secondary) px-6 py-4 lg:space-y-8 lg:py-12">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-(--color-accent-primary)/20 p-2">
          <GalleryIcon className="size-6 text-(--color-accent-primary)" />
        </div>
        <h2 className="text-lg font-semibold text-(--color-accent-primary) md:text-xl xl:text-2xl">
          GAME <span className="text-white">CAPTURES</span>
        </h2>
      </div>
      {/* <Gallery images={screenshotsList} /> */}
      <div className="custom-pagination mx-auto mt-4 w-fit text-center text-xl"></div>
    </div>
  );
}
