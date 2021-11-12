import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceListComponent } from './apolice-list.component';

describe('ApoliceListComponent', () => {
  let component: ApoliceListComponent;
  let fixture: ComponentFixture<ApoliceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoliceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoliceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
