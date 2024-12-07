import { IconBox } from './IconBox.tsx';
import { SelectFieldProps } from '../types/types.ts';

export function SelectField({
  selectedValue,
  onChange,
  options,
}: SelectFieldProps) {
  return (
    <div className="space-y-2 flex justify-center">
      <div className="flex gap-4 w-full max-w-2xl">
        {options.map((option) => (
          <IconBox
            key={option.value}
            icon={option.icon}
            label={option.label}
            value={option.value}
            isSelected={selectedValue === option.value}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
