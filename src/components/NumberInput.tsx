import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import { NumberInputProps } from '../types/types.ts';

export function NumberInput({
  value,
  onChange,
  min,
  max,
  step,
  label,
  itemType,
}: NumberInputProps) {
  const handleIncrement = () => {
    const newValue = Math.min(value + step, 100);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= min) {
      onChange(newValue);
    }
  };
  console.log(label);
  return (
    <div className="flex flex-col gap-2 text-center">
      <div className="">{label}</div>
      <div className="rounded-lg">
        <button
          type="button"
          onClick={handleIncrement}
          disabled={itemType === ''}
          className="w-full flex h-10 rounded-t items-center justify-center bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Increase value"
        >
          <ChevronUp className="h-8 w-8 text-white" />
        </button>
        <input
          type="text"
          value={`${value} ${label === 'Padding' ? '%' : label === 'Wrap Spacing' ? 'in' : 'ft'}`}
          onChange={handleInputChange}
          disabled={itemType === ''}
          min={min}
          max={max}
          step={step}
          className="w-full border-0 text-secondary py-1 font-bold text-center text-xl focus:outline-none focus:ring-2 focus:ring-primary disabled:text-gray-300"
        />
        <button
          type="button"
          onClick={handleDecrement}
          disabled={itemType === ''}
          className="w-full flex h-10 rounded-b items-center justify-center bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Decrease value"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
}
