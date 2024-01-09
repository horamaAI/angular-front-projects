import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDataSourceComponent } from './pagination-data-source.component';

describe('PaginationDataSourceComponent', () => {
  let component: PaginationDataSourceComponent;
  let fixture: ComponentFixture<PaginationDataSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationDataSourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
