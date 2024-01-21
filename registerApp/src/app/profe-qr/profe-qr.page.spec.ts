import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfeQrPage } from './profe-qr.page';

describe('ProfeQrPage', () => {
  let component: ProfeQrPage;
  let fixture: ComponentFixture<ProfeQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfeQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
