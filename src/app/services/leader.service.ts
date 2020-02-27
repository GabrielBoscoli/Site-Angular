import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(): Leader[] {
    return LEADERS;
  }

  /*getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }*/

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
