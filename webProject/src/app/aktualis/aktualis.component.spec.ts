import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualisComponent } from './aktualis.component';

describe('AktualisComponent', () => {
  let component: AktualisComponent;
  let fixture: ComponentFixture<AktualisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktualisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktualisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
