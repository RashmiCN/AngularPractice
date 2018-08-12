import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JCLDetailsComponent } from './jcldetails.component';

describe('JCLDetailsComponent', () => {
  let component: JCLDetailsComponent;
  let fixture: ComponentFixture<JCLDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JCLDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JCLDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
