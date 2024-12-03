import { useState } from 'react';
import { Slider } from './Slider';
import { SelectField } from './SelectField';
import { NumberInput } from './NumberInput';
import { Results } from './Results';
import { GuideImage } from './GuideImage';
import type { CalculatorState } from '../types/calculator';
import { calculateLightLength, calculateStrands } from '../utils/calculations';

export function Calculator() {
  const [itemData, setItemData] = useState<CalculatorState>({
    wrapType: 'cone',
    lightType: 'linear',
    height: 0,
    width: 0,
    spacing: 1,
    padding: 0,
  });

  const totalLinearFeet = calculateLightLength(
    itemData.wrapType,
    itemData.height,
    itemData.width,
    itemData.spacing,
    itemData.padding
  );

  const totalStrands =
    itemData.lightType === 'strands' ? calculateStrands(totalLinearFeet) : null;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <img
        src="/Bright_Brothers_Logo_no_tag.svg"
        alt="Bright Brothers logo"
        className="w-32 h-full mx-auto"
      />
      <h1 className="text-2xl font-bold text-center mb-8 text-primary">
        Christmas Lights Calculator
      </h1>

      <div className="space-y-6">
        <SelectField
          label="Wrap Type"
          value={itemData.wrapType}
          onChange={(value) => setItemData({ ...itemData, wrapType: value })}
          options={[
            { value: 'cone', label: 'Cone' },
            { value: 'lollipop', label: 'Lollipop' },
            { value: 'post', label: 'Post' },
          ]}
        />

        <GuideImage wrapType={itemData.wrapType} />

        <SelectField
          label="Light Type"
          value={itemData.lightType}
          onChange={(value) => setItemData({ ...itemData, lightType: value })}
          options={[
            { value: 'linear', label: 'Linear Feet' },
            { value: 'strands', label: 'Strands (24 ft)' },
          ]}
        />

        <div className="flex gap-2">
          <NumberInput
            label="Width (ft)"
            value={itemData.width}
            onChange={(value) => setItemData({ ...itemData, width: value })}
            min={0}
          />

          <NumberInput
            label="Height (ft)"
            value={itemData.height}
            onChange={(value) => setItemData({ ...itemData, height: value })}
            min={0}
          />

          <NumberInput
            label="Wrap Spacing (inches)"
            value={itemData.spacing}
            onChange={(value) => setItemData({ ...itemData, spacing: value })}
            min={1}
          />
        </div>
        <Slider
          label="Padding"
          value={itemData.padding}
          onChange={(value) => setItemData({ ...itemData, padding: value })}
          min={0}
          max={50}
        />
        <Results
          linearFeet={totalLinearFeet}
          strands={totalStrands}
          lightType={itemData.lightType}
        />
      </div>
    </div>
  );
}
