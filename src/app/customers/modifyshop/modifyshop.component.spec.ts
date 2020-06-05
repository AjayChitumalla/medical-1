import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyshopComponent } from './modifyshop.component';

describe('ModifyshopComponent', () => {
  let component: ModifyshopComponent;
  let fixture: ComponentFixture<ModifyshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
