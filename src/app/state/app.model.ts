import { Cat } from '../model/cat.model';

export interface AppStateModel {
  deleteMode: boolean;
  catsList: Cat[];
  errorLoadingCatsList: boolean;
}

export const defaults: AppStateModel = {
  deleteMode: false,
  catsList: [],
  errorLoadingCatsList: false
};
