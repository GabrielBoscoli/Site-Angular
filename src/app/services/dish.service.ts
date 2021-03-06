import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { DISHES } from '../shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES);
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]);
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
