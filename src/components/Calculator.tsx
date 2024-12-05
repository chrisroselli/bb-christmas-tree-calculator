import { useState } from 'react';
import { SelectField } from './SelectField';
import { NumberInput } from './NumberInput';
import { Results } from './Results';
import { GuideImage } from './GuideImage';
import type { CalculatorState } from '../types/types.ts';
import { calculateLightLength, calculateStrands } from '../utils/calculations';
import {
  TreePine,
  TreeDeciduous,
  Landmark,
  PencilRuler,
  AudioWaveform,
} from 'lucide-react';

export function Calculator() {
  const [selectedWrapType, setSelectedWrapType] = useState('');
  const [selectedLightType, setSelectedLightType] = useState('');
  const [itemData, setItemData] = useState<CalculatorState>({
    wrapType: '',
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
  console.log(itemData.wrapType);
  const totalStrands =
    itemData.lightType === 'strands' ? calculateStrands(totalLinearFeet) : null;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <div className="space-y-6">
        <SelectField
          selectedValue={selectedWrapType}
          onValueChange={setSelectedWrapType}
          label="Wrap Type"
          value={itemData.wrapType}
          onChange={(value) => {
            setItemData({ ...itemData, wrapType: value });
            setSelectedWrapType(value);
          }}
          options={[
            { icon: TreePine, value: 'cone', label: 'Cone' },
            { icon: TreeDeciduous, value: 'lollipop', label: 'Lollipop' },
            { icon: Landmark, value: 'post', label: 'Post' },
          ]}
        />

        <GuideImage wrapType={itemData.wrapType} />

        <SelectField
          selectedValue={selectedLightType}
          onValueChange={setSelectedLightType}
          label="Light Type"
          value={itemData.lightType}
          onChange={(value) => {
            setItemData({ ...itemData, lightType: value });
            setSelectedLightType(value);
          }}
          options={[
            { icon: PencilRuler, value: 'linear', label: 'Linear Feet' },
            { icon: AudioWaveform, value: 'strands', label: 'Strands (24 ft)' },
          ]}
        />

        <div className="flex gap-2">
          <NumberInput
            label="Width"
            value={itemData.width}
            onChange={(value) => setItemData({ ...itemData, width: value })}
            min={0}
            step={1}
            itemType={itemData.wrapType}
          />

          <NumberInput
            label="Height"
            value={itemData.height}
            onChange={(value) => setItemData({ ...itemData, height: value })}
            min={0}
            step={1}
            itemType={itemData.wrapType}
          />

          <NumberInput
            label="Wrap Spacing"
            value={itemData.spacing}
            onChange={(value) => setItemData({ ...itemData, spacing: value })}
            min={0}
            step={1}
            itemType={itemData.wrapType}
          />
          <NumberInput
            label="Padding"
            value={itemData.padding}
            onChange={(value) => setItemData({ ...itemData, padding: value })}
            min={0}
            max={100}
            step={1}
            itemType={itemData.wrapType}
          />
        </div>
        <Results
          linearFeet={totalLinearFeet}
          strands={totalStrands}
          lightType={itemData.lightType}
        />
      </div>
    </div>
  );
}
