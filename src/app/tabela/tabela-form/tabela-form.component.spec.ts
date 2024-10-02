import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFormComponent } from './tabela-form.component';

describe('TabelaFormComponent', () => {
  let component: TabelaFormComponent;
  let fixture: ComponentFixture<TabelaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
