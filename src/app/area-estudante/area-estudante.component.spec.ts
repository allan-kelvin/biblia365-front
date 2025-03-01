import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEstudanteComponent } from './area-estudante.component';

describe('AreaEstudanteComponent', () => {
  let component: AreaEstudanteComponent;
  let fixture: ComponentFixture<AreaEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaEstudanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
