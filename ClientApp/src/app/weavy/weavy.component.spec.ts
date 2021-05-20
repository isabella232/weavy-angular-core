import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeavyComponent } from './weavy.component';

describe('WeavyComponent', () => {
  let component: WeavyComponent;
  let fixture: ComponentFixture<WeavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
