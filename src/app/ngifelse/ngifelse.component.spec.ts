import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifelseComponent } from './ngifelse.component';

describe('NgifelseComponent', () => {
  let component: NgifelseComponent;
  let fixture: ComponentFixture<NgifelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
