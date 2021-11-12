import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceRestComponent } from './apolice-rest.component';

describe('ApoliceRestComponent', () => {
  let component: ApoliceRestComponent;
  let fixture: ComponentFixture<ApoliceRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoliceRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoliceRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
