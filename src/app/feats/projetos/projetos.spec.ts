import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projetos } from './projetos';

describe('Projetos', () => {
  let component: Projetos;
  let fixture: ComponentFixture<Projetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projetos],
    }).compileComponents();

    fixture = TestBed.createComponent(Projetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to the published portfolio', () => {
    const link = fixture.nativeElement.querySelector('.project-link') as HTMLAnchorElement;

    expect(link.href).toBe('https://pablosborz.github.io/aprendizado/');
  });
});
