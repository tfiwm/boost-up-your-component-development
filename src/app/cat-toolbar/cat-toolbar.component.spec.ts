import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatToolbarComponent } from './cat-toolbar.component';

describe('CatToolbarComponent', () => {
  let component: CatToolbarComponent;
  let fixture: ComponentFixture<CatToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
