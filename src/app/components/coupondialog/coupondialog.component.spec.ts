import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupondialogComponent } from './coupondialog.component';

describe('CoupondialogComponent', () => {
  let component: CoupondialogComponent;
  let fixture: ComponentFixture<CoupondialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupondialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
