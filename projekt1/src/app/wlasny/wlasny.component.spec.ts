import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlasnyComponent } from './wlasny.component';

describe('WlasnyComponent', () => {
  let component: WlasnyComponent;
  let fixture: ComponentFixture<WlasnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlasnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WlasnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
