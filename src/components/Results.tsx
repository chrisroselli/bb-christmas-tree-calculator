import type { LightType } from '../types/calculator';

interface ResultsProps {
  linearFeet: number;
  strands: number | null;
  lightType: LightType;
}

export function Results({ linearFeet, strands, lightType }: ResultsProps) {
  return (
    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
      <h2 className="text-xl font-semibold text-secondary mb-2">Results</h2>
      {lightType === 'linear' ? (
        <p className="text-primary">
          You need <span className="font-bold">{linearFeet}</span> linear feet
          of lights
        </p>
      ) : (
        <p className="text-primary">
          You need <span className="font-bold">{strands}</span> strands of
          lights
          <span className="block text-sm text-primary mt-1">
            (Total: {linearFeet} linear feet)
          </span>
        </p>
      )}
    </div>
  );
}
