import type { WrapType } from '../types/calculator';

interface GuideImageProps {
  wrapType: WrapType;
}

export function GuideImage({ wrapType }: GuideImageProps) {
  const getImageUrl = () => {
    switch (wrapType) {
      case 'cone':
        return 'christmas-tree.jpg';
      case 'lollipop':
        return 'deciduous-tree.jpg';
      case 'post':
        return 'square-pillar.jpg';
      default:
        return '';
    }
  };

  return (
    <div className="relative aspect-square w-full max-w-xl mx-auto mb-6">
      <img
        src={getImageUrl()}
        alt={`${wrapType} wrapping guide`}
        className="rounded-lg object-cover w-full h-full"
      />
      <div className="absolute inset-0 rounded-lg flex items-center justify-center">
        <div className="bg-white/90 px-4 py-2 rounded-md">
          <p className="text-sm font-medium text-gray-900">
            Measure height from base to top
          </p>
          <p className="text-xs text-gray-600">Width at widest point</p>
        </div>
      </div>
    </div>
  );
}
