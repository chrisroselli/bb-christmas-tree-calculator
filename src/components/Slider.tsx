interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

export function Slider({ label, value, onChange, min, max }: SliderProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} ({value}%)
      </label>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        className="w-full focus:outline-none appearance-none"
      />
    </div>
  );
}
