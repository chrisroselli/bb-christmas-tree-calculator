import { LucideIcon } from 'lucide-react';

export interface CalculatorState {
  wrapType: string;
  lightType: string;
  height: number;
  width: number;
  spacing: number;
  padding: number;
}

export interface SelectFieldProps {
  label: string;
  value: string;
  selectedValue: string;
  onValueChange?: (value: string) => void;
  onChange: (value: string) => void;
  options: { icon: LucideIcon; label: string; value: string }[];
}

export interface IconBoxProps {
  icon: LucideIcon;
  label: string;
  value: string;
  isSelected: boolean;
  onChange: (value: string) => void;
}

export interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max?: number;
  step: number;
  itemType: string;
}

export interface ResultsProps {
  linearFeet: number;
  strands: number | null;
  lightType: string;
}

export interface GuideImageProps {
  wrapType: string;
}
