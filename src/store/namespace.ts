export declare namespace NConfApp {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;

  type TConfContainer = {
    update: (params: string) => void;
    dispatch: TListener[];
  };

  type TListener = {
    id: N;
    type: S;
    category: S;
  };
}
