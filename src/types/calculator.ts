export type WrapType = 'cone' | 'lollipop' | 'post';
export type LightType = 'linear' | 'strands';

export interface CalculatorState {
  wrapType: WrapType;
  lightType: LightType;
  height: number;
  width: number;
  spacing: number;
  padding: number;
}
