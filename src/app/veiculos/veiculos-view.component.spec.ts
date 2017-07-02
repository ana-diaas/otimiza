import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosViewComponent } from './veiculos-view.component';

describe('VeiculosViewComponent', () => {
  let component: VeiculosViewComponent;
  let fixture: ComponentFixture<VeiculosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
