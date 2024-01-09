import { Component } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'tst-simple-data-source',
  standalone: true,
  imports: [],
  templateUrl: './simple-data-source.component.html',
  styleUrl: './simple-data-source.component.css'
})
export interface SimpleDataSource<T> extends DataSource<T> {
  connect(collectionViewer: CollectionViewer): Observable<readonly T[]>;
  disconnect(collectionViewer: CollectionViewer): void;

}
