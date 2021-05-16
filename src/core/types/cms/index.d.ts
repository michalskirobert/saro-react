import { NReducers } from "@namespace";
// import { string } from "yup/lib/locale";

export declare namespace NCMS {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TEditContainer = {
    fetchCrew: () => void;
    alert: B;
    handleEdit: (id: N, type: S) => void;
    database: NReducers.TDatabase;
    getEditedItem: (id: N, type: S) => void;
    updateEditedItem: (id: N, type: S, values: Partial<any>) => void;
    type: S;
    status: S;
    categories: S[];
  };

  export type TDefaultBodyValue = {
    title: S;
    subtitle: S;
    category: S[];
    imgURL: S;
    imagesURL?: S[] | U;
    language: S[];
    crew: TCrew[];
    content: S;
    city?: S | U;
    place?: S | U;
    date?: Date | U;
    time?: Date | U;
    link?: S | U;
  };

  export type TManageContainer = {
    isEditable: B;
    news: TNews[];
    events: TEvents[];
    articles: S;
    selectedRowsId: S[];
    setSelectedRowsId: React.Dispatch<React.SetStateAction<string[]>>;
    selectedRowId: S | U;
    setSelectedRowId: React.Dispatch<React.SetStateAction<string>>;
    showAlert: B;
    setShowAlert: V;
    handleButtonActions: (action: S) => void;
    removeItem: (currentPage: S, id: S) => Promise<void>;
    handleEdit: (id: S, type: S) => Promise<void>;
    deleteSelections: void;
    isAll: B;
    setIsAll: B;
    isLoading: B;
  };

  export type TNews = {
    title: S;
    subtitle: S;
    category: S[];
    imgURL: S;
    imagesURL: S[];
    language: S[];
    crew: TCrew[];
    content: S;
  };

  export type TCategories = {};

  export type TCrew = {
    name: S;
    hobbies: S[];
  };

  export type TLanguages = {
    value: S;
    label: S;
  };

  export type TAlerts = {};

  export type TEvents = {
    title: S;
    subtitle: S;
    city: S;
    place: S;
    date: Date;
    time: Date;
    link: S;
    imgURL: S;
    language: TLanguages[];
    crew: TCrew[];
    content: S;
  };
}
