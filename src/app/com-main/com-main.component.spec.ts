import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComMainComponent } from './com-main.component';

describe('ComMainComponent', () => {
  let component: ComMainComponent;
  let fixture: ComponentFixture<ComMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComMainComponent]
    });
    fixture = TestBed.createComponent(ComMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
