import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ListarQRPage } from './listar-qr.page';

describe('ListarQRPage', () => {
  let component: ListarQRPage;
  let fixture: ComponentFixture<ListarQRPage>;


    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ListarQRPage],
        imports: [IonicModule.forRoot()]
      }).compileComponents();
  
      fixture = TestBed.createComponent(ListarQRPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  