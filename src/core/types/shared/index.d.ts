export declare namespace NCustomItems {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TCustomSelect = {
    name: S;
    label?: S | U;
    value?: S | U;
    placeholder?: S | U;
    onChange: (name: string, values: any) => void;
    isDisabled: B;
    invalid: B;
    options: any;
  };
}
