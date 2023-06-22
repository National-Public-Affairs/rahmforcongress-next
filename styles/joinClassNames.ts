type PossibleValue = string | boolean;
type TJoinClassNames = PossibleValue[];

export const joinClassNames = (classes: TJoinClassNames): string =>
  [...classes].filter(Boolean).join(' ');
