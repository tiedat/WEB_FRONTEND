import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPikerComponent } from './color-piker.component';

describe('ColorPikerComponent', () => {
  let component: ColorPikerComponent;
  let fixture: ComponentFixture<ColorPikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
