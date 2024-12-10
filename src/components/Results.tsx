import { ResultsProps } from '../types/types.ts';
import { RotateCcw } from 'lucide-react';

export function Results({
  linearFeet,
  strands,
  lightType,
  reset,
}: ResultsProps) {
  return (
    <div className="flex sm:gap-2 fixed sm:relative left-0 sm:left-auto bottom-0 sm:bottom-auto mt-6 w-full h-[120px]">
      <div className="px-6 py-4 md:p-4 bg-blue-100 sm:rounded-lg basis-4/5">
        <h2 className="text-2xl font-semibold text-secondary mb-1">Results:</h2>
        {lightType === 'linear' ? (
          <p className="text-primary text-lg">
            You need{' '}
            <span className="font-bold text-2xl text-secondary">
              {linearFeet}
            </span>{' '}
            linear feet of lights.
          </p>
        ) : (
          <p className="text-primary text-lg">
            You need{' '}
            <span className="font-bold text-2xl text-secondary">{strands}</span>{' '}
            strand(s) of lights.
            <span className="block text-sm font-bold text-primary mt-1">
              (Total: {linearFeet} linear feet)
            </span>
          </p>
        )}
      </div>
      <button
        type="button"
        className="bg-secondary sm:rounded-md basis-1/5 flex items-center justify-center"
        onClick={reset}
      >
        <RotateCcw className="text-white h-8 w-8" />
      </button>
    </div>
  );
}
