import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarlistadiscComponent } from './criarlistadisc.component';

describe('CriarlistadiscComponent', () => {
  let component: CriarlistadiscComponent;
  let fixture: ComponentFixture<CriarlistadiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarlistadiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarlistadiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
