export declare namespace NCustomItems {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TCustomEditor = {
    value: S;
    onChangeEditor: (propName?: S, value: S) => void;
    key?: S;
    style?: S;
    propName?: S | U;
    initialValue?: S;
  };

  export type TCustomButton = {
    className: S;
    disabled?: B;
    type: S;
    content: S;
    onClick: () => void;
  };

  export type TCustomSelect = {
    name: S;
    label?: S | U;
    labelText?: S | U;
    value?: ValueType<NCustomItems.TOptions, false>;
    placeholder?: React.ReactNode;
    onChange: (name: S, values: NCMS.TDefaultBodyValue) => void;
    isDisabled?: B;
    invalid: B;
    options?:
      | GroupedOptionsType<NCustomItems.TOptions>
      | OptionsType<NCustomItems.TOptions>
      | U;
    id?: S | U;
    styles?: Partial<Styles<NCustomItems.TOptions, false>> | U;
  };

  export type TCustomInput = {
    label?: S;
    placeholder?: S | U;
    value?: S | U;
    invalid: B;
    id: S;
    type: CustomInputType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

  type TOptions = {
    label: S;
    value: S;
  };
}
