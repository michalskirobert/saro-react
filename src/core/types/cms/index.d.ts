export declare namespace NCMS {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;

  export type TEditContainer = {
    fetchCrew: () => void;
    alert: any; //do podmianki :)
    handleEdit: (id: N, type: S) => void;
    database: any; //do podmianki
    getEditedItem: (id: N, type: S) => void;
    updateEditedItem: (id: N, type: S, values: Partial<any>) => void;
    type: S;
    status: S;
    categories: S[];
  };
}
