import { IconBox } from './IconBox.tsx';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  selectedValue: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

export function SelectField({
  selectedValue,
  onChange,
  options,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
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
