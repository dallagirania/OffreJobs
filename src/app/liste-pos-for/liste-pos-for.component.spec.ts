import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePosForComponent } from './liste-pos-for.component';

describe('ListePosForComponent', () => {
  let component: ListePosForComponent;
  let fixture: ComponentFixture<ListePosForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePosForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePosForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
