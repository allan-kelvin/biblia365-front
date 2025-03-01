import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeituraBibliaComponent } from './leitura-biblia.component';

describe('LeituraBibliaComponent', () => {
  let component: LeituraBibliaComponent;
  let fixture: ComponentFixture<LeituraBibliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeituraBibliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeituraBibliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
