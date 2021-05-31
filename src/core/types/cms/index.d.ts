import { NReducers } from "@namespace/reducers";

export declare namespace NCMS {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TEditContainer = {
    fetchCrew: () => Promise<() => void>;
    fetchCategories?: () => Promise<() => void>;
    handleEdit: (id: S, type: S) => Promise<void>;
    database: NReducers.TDatabase;
    getEditedItem: (id: S, type: S) => Promise<void>;
    updateEditedItem: (
      id: S,
      type: S,
      values: NReducers.TDatabase
    ) => Promise<void>;
    type: S;
    id: S;
    status: S;
    categories: S[];
    image: S;
    images: S[];
    imageChangeHandler: (
      event: React.SyntheticEvent<EventTarget>,
      multiple?: boolean
    ) => Promise<void>;
    deleteImage: (file: S) => Promise<void>;
  };

  export type TManageContainer = {
    isEditable: (selectedRowId: S) => boolean;
    news: TNews[];
    events: TEvents[];
    articles: TArticles[];
    selectedRowsId: S[];
    setSelectedRowsId: React.Dispatch<React.SetStateAction<S[]>>;
    selectedRowId: S | U;
    setSelectedRowId: React.Dispatch<React.SetStateAction<S>>;
    showAlert: B;
    setShowAlert: React.Dispatch<React.SetStateAction<B>>;
    handleButtonActions: (action: S) => void;
    removeItem: (currentPage: S, id: S) => Promise<void>;
    handleEdit: (id: S, type: S) => Promise<void>;
    deleteSelections: () => void;
    isAll: B;
    setIsAll: React.Dispatch<React.SetStateAction<B>>;
    isLoading: B;
    parseDataTable: (table: any) => any[];
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

  export type TArticles = {
    title: S;
    category: S[];
    imgURL: S;
    imagesURL: S[];
    language: S[];
    crew: TCrew[];
    content: S;
  };

  export type TCrew = {
    name: S;
    hobbies: S[];
  };

  export type TLanguages = {
    value: S;
    label: S;
  };
}
