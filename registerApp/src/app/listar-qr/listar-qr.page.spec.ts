import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarQRPage } from './listar-qr.page';

describe('ListarQRPage', () => {
  let component: ListarQRPage;
  let fixture: ComponentFixture<ListarQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
