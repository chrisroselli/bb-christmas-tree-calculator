import { IconBoxProps } from '../types/types.ts';

export function IconBox({
  icon: Icon,
  label,
  value,
  isSelected,
  onChange,
}: IconBoxProps) {
  return (
    <button
      onClick={() => onChange(value)}
      className={`w-full p-6 rounded-lg transition-all duration-200 flex flex-col items-center gap-3 ${
        isSelected
          ? 'bg-primary text-white shadow-lg scale-105'
          : 'bg-white text-primary hover:bg-gray-50 shadow-md'
      }`}
    >
      <Icon
        size={28}
        className={isSelected ? 'text-white' : 'text-secondary'}
      />
      <span className="text-lg font-bold">{label}</span>
    </button>
  );
}
