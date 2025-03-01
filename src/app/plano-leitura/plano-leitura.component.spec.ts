import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoLeituraComponent } from './plano-leitura.component';

describe('PlanoLeituraComponent', () => {
  let component: PlanoLeituraComponent;
  let fixture: ComponentFixture<PlanoLeituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoLeituraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
