import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {preview} from '../pages/preview/preview';


@Component({
   templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = preview;

  constructor(private platform: Platform) {
    // this.rootPage = preview;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

