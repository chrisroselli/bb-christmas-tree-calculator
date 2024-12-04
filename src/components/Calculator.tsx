import { useState } from 'react';
import { Slider } from './Slider';
import { SelectField } from './SelectField';
import { NumberInput } from './NumberInput';
import { Results } from './Results';
import { GuideImage } from './GuideImage';
import type { CalculatorState } from '../types/calculator';
import { calculateLightLength, calculateStrands } from '../utils/calculations';
import {
  TreePine,
  TreeDeciduous,
  Landmark,
  PencilRuler,
  AudioWaveform,
} from 'lucide-react';

export function Calculator() {
  const [selectedDevice, setSelectedDevice] = useState('');
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
        className="w-40 h-full mx-auto"
      />
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Christmas Lights Calculator
      </h1>

      <div className="space-y-6">
        <SelectField
          selectedValue={selectedDevice}
          onValueChange={setSelectedDevice}
          label="Wrap Type"
          value={itemData.wrapType}
          onChange={(value) => {
            setItemData({ ...itemData, wrapType: value });
            setSelectedDevice(value);
          }}
          options={[
            { icon: TreePine, value: 'cone', label: 'Cone' },
            { icon: TreeDeciduous, value: 'lollipop', label: 'Lollipop' },
            { icon: Landmark, value: 'post', label: 'Post' },
          ]}
        />

        <GuideImage wrapType={itemData.wrapType} />

        <SelectField
          selectedValue={selectedDevice}
          onValueChange={setSelectedDevice}
          label="Light Type"
          value={itemData.lightType}
          onChange={(value) => {
            setItemData({ ...itemData, lightType: value });
            setSelectedDevice(value);
          }}
          options={[
            { icon: PencilRuler, value: 'linear', label: 'Linear Feet' },
            { icon: AudioWaveform, value: 'strands', label: 'Strands (24 ft)' },
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
