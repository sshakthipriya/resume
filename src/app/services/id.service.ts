import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  private idSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public id$: Observable<number> = this.idSubject.asObservable();

  constructor() {}

  setId(id: number) {
    this.idSubject.next(id);
  }

  getId(): number {
    return this.idSubject.getValue();
  }
}
