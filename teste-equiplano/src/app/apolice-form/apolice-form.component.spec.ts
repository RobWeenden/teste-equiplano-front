import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceFormComponent } from './apolice-form.component';

describe('ApoliceFormComponent', () => {
  let component: ApoliceFormComponent;
  let fixture: ComponentFixture<ApoliceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoliceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoliceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
