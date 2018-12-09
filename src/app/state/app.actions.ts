import { Cat } from '../model/cat.model';

export class ToggleDeleteMode {
  static readonly type = '[App] toggle delete mode';
}

export class DeleteCat {
  static readonly type = '[App] delete cat';
  constructor(public payload: Cat) {}
}

export class LoadCats {
  static readonly type = '[App] load cats';
}
