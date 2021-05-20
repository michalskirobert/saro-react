export declare namespace NCustomItems {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TCustomEditor = {
    value: S;
    onChangeEditor: (propName: S, e: React.SyntheticEvent<EventTarget>) => void;
    key: S;
    style: S;
    propName: S;
    initialValue: S;
  };

  export type TCustomButton = {
    className: S;
    disabled: B;
    type: S;
    content: S;
    onClick: () => void;
  };

  export type TCustomSelect = {
    name: S;
    label?: S | U;
    value?: S | U;
    placeholder?: S | U;
    onChange: (name: string, values: any) => void;
    isDisabled: B;
    invalid: B;
    options: TOptions[];
  };

  export type TCustomInput = {
    invalid: B;
    id: S;
    placeholder?: S | U;
    type: S;
    value?: S | U;
    onChange: any;
    label: S;
  };

  type TOptions = {
    label: S;
    value: S;
  };
}
