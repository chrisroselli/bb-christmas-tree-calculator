export const calculateLightLength = (
  wrapType: string,
  height: number,
  width: number,
  spacing: number,
  padding: number
): number => {
  const heightInInches = height * 12;
  const diameter = width * 12;

  let baseLength = 0;

  switch (wrapType) {
    case 'cone':
      baseLength = Math.PI * diameter * (heightInInches / spacing) * 0.6;
      break;
    case 'lollipop':
      baseLength = Math.PI * diameter * (heightInInches / spacing) * 0.8;
      break;
    case 'post':
      baseLength = Math.PI * diameter * (heightInInches / spacing);
      break;
    default:
      baseLength = 0;
  }

  return Math.ceil((baseLength / 12) * (1 + padding / 100));
};

export const calculateStrands = (linearFeet: number): number => {
  return Math.ceil(linearFeet / 24);
};
