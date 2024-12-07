import { useState, useEffect, useRef } from 'react';
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
    lightType: '',
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

  const resetAllData = () => {
    setSelectedWrapType('');
    setSelectedLightType('');
    setItemData({
      wrapType: '',
      lightType: '',
      height: 0,
      width: 0,
      spacing: 1,
      padding: 0,
    });
  };
  const bottomRef = useRef(null);

  useEffect(() => {
    if (totalLinearFeet !== 0) {
      // Scroll to the bottom when the condition is true
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [totalLinearFeet]);
  return (
    <div className="mb-24 lg:max-w-7xl mx-auto p-6 rounded-3xl space-y-6 sm:mb-0">
      <div className="lg:flex lg:flex-row-reverse gap-6">
        <div className="space-y-6 lg:space-y-0 basis-1/2">
          <GuideImage wrapType={itemData.wrapType} />
        </div>
        <div className="space-y-6 basis-1/2">
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
              {
                icon: AudioWaveform,
                value: 'strands',
                label: 'Strands (24 ft)',
              },
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
              lightType={itemData.lightType}
            />

            <NumberInput
              label="Height"
              value={itemData.height}
              onChange={(value) => setItemData({ ...itemData, height: value })}
              min={0}
              step={1}
              itemType={itemData.wrapType}
              lightType={itemData.lightType}
            />

            <NumberInput
              label="Spacing"
              value={itemData.spacing}
              onChange={(value) => setItemData({ ...itemData, spacing: value })}
              min={1}
              step={1}
              itemType={itemData.wrapType}
              lightType={itemData.lightType}
            />
            <NumberInput
              label="Padding"
              value={itemData.padding}
              onChange={(value) => setItemData({ ...itemData, padding: value })}
              min={0}
              max={100}
              step={10}
              itemType={itemData.wrapType}
              lightType={itemData.lightType}
            />
          </div>
          {totalLinearFeet !== 0 && (
            <Results
              linearFeet={totalLinearFeet}
              strands={totalStrands}
              lightType={itemData.lightType}
              reset={resetAllData}
            />
          )}
        </div>
      </div>
      <div ref={bottomRef} className="h-0" />
    </div>
  );
}
