import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculatorCompomentComponent } from './caculator-compoment.component';

describe('CaculatorCompomentComponent', () => {
  let component: CaculatorCompomentComponent;
  let fixture: ComponentFixture<CaculatorCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaculatorCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculatorCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
