import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypriceComponent } from './modifyprice.component';

describe('ModifypriceComponent', () => {
  let component: ModifypriceComponent;
  let fixture: ComponentFixture<ModifypriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifypriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
