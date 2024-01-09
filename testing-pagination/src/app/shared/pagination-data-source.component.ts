import { Component } from '@angular/core';
import { SimpleDataSource } from './simple-data-source/simple-data-source.component';
import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, startWith, map, shareReplay } from 'rxjs/operators';
import { Page, PaginationEndpoint, Sort } from './simple-data-source/page';

@Component({
  selector: 'tst-pagination-data-source',
  standalone: true,
  imports: [],
  templateUrl: './pagination-data-source.component.html',
  styleUrl: './pagination-data-source.component.css'
})
export class PaginationDataSourceComponent<T> implements SimpleDataSource<T> {

  private pageNumber = new Subject<number>();
  private sort: BehaviorSubject<Sort<T>>;
 
  public page$: Observable<Page<T>>;
 
  constructor(endpoint: PaginationEndpoint<T>, initialSort: Sort<T>, size = 20) {
    this.sort = new BehaviorSubject<Sort<T>>(initialSort);
    this.page$ = this.sort.pipe(
      switchMap((sort) =>
        this.pageNumber.pipe(
          startWith(0),
          switchMap((page) => endpoint({ page, sort, size }))
        )
      ),
      shareReplay(1)
    );
  }
 
  sortBy(sort: Partial<Sort<T>>): void {
    const lastSort = this.sort.getValue();
    const nextSort = { ...lastSort, ...sort };
    this.sort.next(nextSort);
  }
 
  fetch(page: number): void {
    this.pageNumber.next(page);
  }
  connect(collectionViewer: CollectionViewer): Observable<readonly T[]> {
    return this.page$.pipe(map((page) => page.content));
  }
  
  disconnect(collectionViewer: CollectionViewer): void {}

}
