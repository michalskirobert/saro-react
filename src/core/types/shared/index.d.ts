export declare namespace NCustomItems {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TCustomEditor = {
    value: S;
    onChangeEditor:
      | ((propName?: string | undefined, value: string) => void)
      | undefined;
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
    value?: ValueType<NCustomItems.TOptions, false>;
    placeholder?: React.ReactNode;
    onChange: (name: string, values: any) => void;
    isDisabled: B;
    invalid: B;
    options?:
      | GroupedOptionsType<NCustomItems.TOptions>
      | OptionsType<NCustomItems.TOptions>
      | undefined;
    id?: string | undefined;
    styles?: Partial<Styles<NCustomItems.TOptions, false>> | undefined;
  };

  export type TCustomInput = {
    invalid: B;
    id: S | N;
    placeholder?: S | U;
    type: CustomInputType;
    value?: S | U;
    onChange: any;
    label?: S;
  };

  type TOptions = {
    label: S;
    value: S;
  };
}
