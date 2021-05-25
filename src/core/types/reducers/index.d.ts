import { NCMS } from "@namespace";
import { AxiosResponse } from "axios";

export declare namespace NReducers {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type D = Date;

  export type TCurrentUser = {
    uid: N;
    username: S;
    email: S;
    hobbies: S;
    firstName: S;
    lastName: S;
    nativeLang: S;
    studyingLang: S;
    about: S;
    isLogged: B;
    isLoading: B;
    status: N;
  };

  export type TGeneral = {
    language: S;
  };

  export type TDictionary = {
    languages: TLanguages[];
    "user statuses": TUserStatuses[];
  };

  export type TLanguages = {
    code: S;
    name: S;
    native: S;
  };

  export type TUserStatuses = {
    label: S;
    status: N;
  };

  export type TInit = {
    nav: TNav[];
    pages: TPages[];
    auth: TAuth[];
    footer: TFooter[];
  };

  export type TPages = {
    homepage: THomepage[];
  };

  export type THomepage = {
    sections: TSections[];
    subsection: TSubsection[];
    nearPeople: TNearPeople[];
  };

  export type TSections = {
    details: S;
    header: S;
    linkSource: S;
    linkTitle: S;
  };

  export type TSubsection = {
    className: S;
    details: S;
    header: S;
    imgURL: S;
  };

  export type TNearPeople = {
    header: S;
    imgURL: S;
    options: TNearPeopleOptions[];
  };

  export type TSelectSignUpOptions = {
    label: S;
    value: S | N;
  };

  export type TAuth = {
    "sing-in": TSignIn[];
    "sing-up": TSignUp[];
  };

  export type TSignIn = {
    action: S;
    buttonTitle: S;
    header: S;
    link: S;
    linkPath: S;
    labels: TSignInLabels[];
  };

  export type TSignInLabels = {
    invalid: S;
    label: S;
    placeholder: S;
    type: S;
    valid: S;
  };

  export type TSignUp = {
    action: S;
    buttonTitle: S;
    header: S;
    link: S;
    labels: TSignUpLabels;
  };

  export type TSignUpLabels = {
    "step-1": TStep1[];
    "step-2": TStep2[];
  };

  export type TStep1 = {
    invalid: S;
    label: S;
    placeholder: S;
    type: S;
    valid: S;
  };

  export type TStep2 = {
    invalid?: S | U;
    label?: S | U;
    placeholder?: S | U;
    type?: S | U;
    valid?: S | U;
    select?: TStep2Select[] | U;
    "social-media"?: TSocilaMedia[] | U;
  };

  export type TStep2Select = {
    label: S;
    value: S;
  };

  export type TSocilaMedia = {
    invalid: S;
    label: S;
    placeholder: S;
    type: S;
    valid: S;
    select?: TSocialMediaSelect[] | U;
  };

  export type TSocialMediaSelect = {
    label: S;
    type: S;
    value: S;
  };

  export type TNav = {
    classLink: S;
    isLogged: B;
    title: S;
    path?: S | U;
    status?: number[] | U;
    content?: TNavContent[] | U;
  };

  export type TNavContent = {
    path: S;
    title: S;
    status?: N[],
    subcontent?: TNavSubcontent[],
  };

  export type TNavSubcontent = {
    
  };

  export type TFooter = {
    details: S;
    header: S;
    language: TFooterLanguage[];
    socialMedia: TFooterSocialMedia[];
  };

  export type TFooterLanguage = {
    value: S;
    label: S;
  };

  export type TFooterSocialMedia = {
    header: S;
    links: TFooterLinks[];
  };

  export type TFooterLinks = {
    imgURL: S;
    link: S;
    title: S;
  };

  export type TDatabase = {
    isLoading: B;
    isError: B;
    ErrorContent: S;
    articles: NCMS.TArticles[];
    events: NCMS.TEvents[];
    news: NCMS.TNews[];
    hero: NHome.THero[];
    crew: NCMS.TCrew[];
    dictionary: TDictionary;
    init: TInit;
  };

  export type TUseFetch = {
    isLoading: B,
    data: AxiosResponse | undefined,
  };
}
