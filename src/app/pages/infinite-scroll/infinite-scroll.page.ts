import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  // @ts-ignore
  @ViewChild (IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data = Array(50);

  constructor() { }

  ngOnInit() {
  }

  loadMoreData(event) {
    console.log('Cargando mas datos....');
    setTimeout(() => {

      if (this.data.length > 150) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const newArr = Array(50);
      this.data.push(...newArr);
      event.target.complete();
    }, 1000);
  }
}
