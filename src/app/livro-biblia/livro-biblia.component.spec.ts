import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroBibliaComponent } from './livro-biblia.component';

describe('LivroBibliaComponent', () => {
  let component: LivroBibliaComponent;
  let fixture: ComponentFixture<LivroBibliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroBibliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroBibliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
