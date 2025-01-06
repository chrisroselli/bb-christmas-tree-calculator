export const calculateLightLength = (
  wrapType: string,
  height: number,
  width: number,
  spacing: number,
  padding: number
): number => {
  const heightInInches = height * 12;
  const spacingInInches = spacing / 12;

  let baseLength = 0;

  switch (wrapType) {
    case 'cone':
      baseLength = Math.PI * width * (heightInInches / spacingInInches) * 0.6;
      break;
    case 'lollipop':
      baseLength = Math.PI * width * (heightInInches / spacingInInches) * 0.8;
      break;
    case 'post':
      baseLength = Math.PI * width * (heightInInches / spacing);
      break;
    default:
      baseLength = 0;
  }

  return Math.ceil((baseLength / 12) * (1 + padding / 100));
};

export const calculateStrands = (linearFeet: number): number => {
  return Math.ceil(linearFeet / 24);
};
