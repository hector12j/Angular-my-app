import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomalaComponent } from './tomala.component';

describe('TomalaComponent', () => {
  let component: TomalaComponent;
  let fixture: ComponentFixture<TomalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
