import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDataSource } from './simple-data-source.component';

describe('SimpleDataSourceComponent', () => {
  let component: SimpleDataSource;
  let fixture: ComponentFixture<SimpleDataSource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDataSource]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleDataSource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
