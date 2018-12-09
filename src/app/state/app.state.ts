import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AppStateModel, defaults } from './app.model';
import { ToggleDeleteMode, LoadCats, DeleteCat } from './app.actions';
import { CatPageService } from '../cat-page/cat-page.service';

@State<AppStateModel>({
  name: 'app',
  defaults: defaults
})
export class AppState {
  constructor(private catService: CatPageService) {}

  @Selector()
  static catList(state: AppStateModel) {
    return state.catsList;
  }

  @Selector()
  static errorCatList(state: AppStateModel) {
    return state.errorLoadingCatsList;
  }

  @Selector()
  static deleteMode(state: AppStateModel) {
    return state.deleteMode;
  }

  @Action(ToggleDeleteMode)
  setDeleteMode({ patchState, getState }: StateContext<AppStateModel>) {
    patchState({
      deleteMode: !getState().deleteMode
    });
  }

  @Action(DeleteCat)
  deleteCat({ patchState, getState }: StateContext<AppStateModel>, { payload }: DeleteCat) {
    patchState({
      catsList: getState().catsList.filter(cat => cat !== payload)
    });
  }

  @Action(LoadCats)
  loadCats({ patchState }: StateContext<AppStateModel>) {
    return this.catService.getCats().subscribe(
      cats =>
        patchState({
          catsList: cats,
          errorLoadingCatsList: false
        }),
      () =>
        patchState({
          errorLoadingCatsList: true
        })
    );
  }
}
