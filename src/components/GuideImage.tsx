import type { GuideImageProps } from '../types/types.ts';

export function GuideImage({ wrapType }: GuideImageProps) {
  const getImageUrl = () => {
    switch (wrapType) {
      case 'cone':
        return 'https://cdn.treehouseinternetgroup.com/cms_core/bright-brothers/christmas-lights-calculator/christmas-tree.jpg';
      case 'lollipop':
        return 'https://cdn.treehouseinternetgroup.com/cms_core/bright-brothers/christmas-lights-calculator/deciduous-tree.jpg';
      case 'post':
        return 'https://cdn.treehouseinternetgroup.com/cms_core/bright-brothers/christmas-lights-calculator/round-pillar.jpg';
      default:
        return 'https://cdn.treehouseinternetgroup.com/cms_core/bright-brothers/christmas-lights-calculator/bb-calc.jpg';
    }
  };

  return (
    <div className="relative aspect-square w-full lg:max-w-xl mx-auto mb-6">
      <img
        src={getImageUrl()}
        alt={`${wrapType} wrapping guide`}
        className="rounded-lg object-cover w-full h-full lg:border-2 border-gray-100"
      />
      <div className="grid grid-cols-8 grid-rows-8 absolute inset-0 rounded-lg gap-2 p-3">
        {wrapType === 'cone' ? (
          <>
            <div className="row-start-7 col-span-full w-1/2 justify-self-center relative mx-auto h-0.5 bg-secondary">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-secondary"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-secondary"></div>
              <p className="mt-1.5 text-center text-xs sm:text-sm text-white font-bold">
                WIDTH AT BASE
              </p>
            </div>

            <p className="row-start-5 col-span-full w-1/3 justify-self-center text-center self-start text-xs sm:text-sm text-white font-bold border-secondary border-t-4 border-b-4 border-dashed  -rotate-6">
              SPACING
            </p>
            <div className="row-start-7 row-end-2 h-full col-start-7 relative mx-auto w-0.5 bg-secondary justify-self-start">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary"></div>
              <p className="text-xs sm:text-sm text-white font-bold right-14 top-4 relative">
                HEIGHT
              </p>
            </div>
          </>
        ) : wrapType === 'lollipop' ? (
          <>
            <div className="row-start-3 col-start-2 col-end-8 self-end relative h-0.5 bg-secondary">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-secondary"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-secondary"></div>
              <p className="mt-1.5 text-center text-xs sm:text-sm text-white font-bold">
                WIDTH AT CENTER
              </p>
            </div>
            <p className="row-start-5 col-start-3 col-end-8 text-center self-start text-sm sm:text-md text-white font-bold border-secondary border-t-4 border-b-4 border-dashed  -rotate-6">
              SPACING
            </p>
            <div className="row-start-7 row-end-1 h-full col-start-8 relative mx-auto w-0.5 bg-secondary justify-self-start">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary"></div>
              <p className="text-xs sm:text-sm text-white font-bold right-14 top-4 relative">
                HEIGHT
              </p>
            </div>
          </>
        ) : wrapType === 'post' ? (
          <>
            <div className="row-start-7 col-span-full px-2 justify-self-center self-end relative h-0.5 bg-secondary">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-secondary"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-secondary"></div>
              <p className="mt-1.5 text-center text-xs sm:text-sm text-white font-bold">
                WIDTH
              </p>
            </div>
            <p className="row-start-5 col-span-full justify-self-center text-center self-start text-sm sm:text-md text-white font-bold border-secondary border-t-4 border-b-4 border-dashed  -rotate-6">
              SPACING
            </p>
            <div className="row-span-full h-4/5 col-start-7 justify-self-start self-center relative mx-auto w-0.5 bg-secondary">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-secondary"></div>
              <p className="text-xs sm:text-sm text-white font-bold right-14 top-4 relative">
                HEIGHT
              </p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
