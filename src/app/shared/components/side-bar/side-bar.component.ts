import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  customOptions: Array<any> = []


  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your Library',
        icon: 'uil-chart',
        router: ['/', 'favourites']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'New Playlist',
        icon: 'uil-plus-square'
      },
      {
        name: 'Your Favourite Songs',
        icon: 'uil-heart'
      }
    ]

    this.customOptions = [
      {
        name: 'My Playlist #1',
        router: ['/']
      },
      {
        name: 'My Playlist #2',
        router: ['/']
      },
      {
        name: 'My Playlist #3',
        router: ['/']
      },
      {
        name: 'My Playlist #4',
        router: ['/']
      }

    ]
  }
}
