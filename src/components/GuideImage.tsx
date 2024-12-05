import type { GuideImageProps } from '../types/types.ts';

export function GuideImage({ wrapType }: GuideImageProps) {
  const getImageUrl = () => {
    switch (wrapType) {
      case 'cone':
        return 'christmas-tree.jpg';
      case 'lollipop':
        return 'deciduous-tree.jpg';
      case 'post':
        return 'round-pillar.jpg';
      default:
        return 'bb-calc.jpg';
    }
  };

  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto mb-6">
      <img
        src={getImageUrl()}
        alt={`${wrapType} wrapping guide`}
        className="rounded-lg object-cover w-full h-full"
      />
      <div className="grid grid-cols-8 grid-rows-8 absolute inset-0 rounded-lg gap-2 bg-primary bg-opacity-50 pt-2">
        {wrapType === 'cone' ? (
          <>
            <p className="row-start-6 col-span-full w-1/2 justify-self-center text-center self-end text-sm text-white font-bold bg-secondary rounded-full">
              WIDTH AT BASE
            </p>
            <p className="row-start-5 col-span-full w-1/3 justify-self-center text-center self-start text-md text-white font-bold border-secondary border-t-4 border-b-4 border-dashed  -rotate-6">
              SPACING
            </p>
            <div className="row-start-7 row-end-2 h-full col-start-7 w-5 text-center justify-self-start bg-secondary rounded-full"></div>
            <p className="row-start-3 h-full col-start-6 justify-self-center text-sm text-white font-bold">
              HEIGHT
            </p>
          </>
        ) : wrapType === 'lollipop' ? (
          <>
            <p className="row-start-6 col-start-3 col-end-8 text-center self-end text-sm text-white font-bold bg-secondary rounded-full">
              WIDTH AT CENTER
            </p>
            <p className="row-start-5 col-start-3 col-end-8 text-center self-start text-md text-white font-bold border-secondary border-t-4 border-b-4 border-dashed  -rotate-6">
              SPACING
            </p>
            <div className="row-start-7 row-end-1 h-full col-start-8 w-5 text-center justify-self-start bg-secondary rounded-full"></div>
            <p className="row-start-3 h-full col-start-7 justify-self-center text-sm text-white font-bold">
              HEIGHT
            </p>
          </>
        ) : wrapType === 'post' ? (
          <>
            <p className="row-start-7 col-span-full px-2 justify-self-center text-center self-end text-sm text-white font-bold bg-secondary rounded-full">
              WIDTH
            </p>
            <p className="row-start-5 col-span-full justify-self-center text-center self-start text-md text-white font-bold border-secondary border-t-4 border-b-4 border-dashed  -rotate-6">
              SPACING
            </p>
            <div className="row-span-full h-4/5 col-start-7 w-5 text-center justify-self-start self-center bg-secondary rounded-full"></div>
            <p className="row-start-3 h-full col-start-6 justify-self-center text-sm text-white font-bold">
              HEIGHT
            </p>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
