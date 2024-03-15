import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeposOffComponent } from './listepos-off.component';

describe('ListeposOffComponent', () => {
  let component: ListeposOffComponent;
  let fixture: ComponentFixture<ListeposOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeposOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeposOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
