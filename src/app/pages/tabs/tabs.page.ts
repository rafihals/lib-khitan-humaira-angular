import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterViewInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab: any;
  currentTitle: string;

  constructor(private routerSvc: Router) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.routerSvc.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onUpdateActiveLink(event.urlAfterRedirects);
      }
    });
    this.onUpdateActiveLink(this.routerSvc.url);
  }

  onSetCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }

  activateLink(index: number) {
    const listItems = document.querySelectorAll('.list');
    listItems.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('active');
        item.querySelector('.icon').classList.add('hover-active');
      } else {
        item.classList.remove('active');
        item.querySelector('.icon').classList.remove('hover-active');
      }
    });
  }

  onActive(index: number): boolean {
    const listItems = document.querySelectorAll('.list');
    return listItems[index].classList.contains('active');
  }

  documentForm() {
    this.routerSvc.navigate(['/tabs/form']);
  }

  onClickBaby() {
    this.routerSvc.navigate(['/tabs/baby']);
  }

  onClickHome() {
    this.routerSvc.navigate(['/tabs/home']);
  }

  onClickPie() {
    this.routerSvc.navigate(['/tabs/pie']);
  }

  onClickSettings() {
    this.routerSvc.navigate(['/tabs/settings']);
  }

  private onUpdateActiveLink(url: string) {
    if (url.includes('/tabs/form')) {
      this.activateLink(0);
      this.currentTitle = 'Formulir';
    } else if (url.includes('/tabs/baby')) {
      this.activateLink(1);
      this.currentTitle = 'Baby';
    } else if (url.includes('/tabs/home')) {
      this.activateLink(2);
      this.currentTitle = 'Home';
    } else if (url.includes('/tabs/pie')) {
      this.activateLink(3);
      this.currentTitle = 'Pie';
    } else if (url.includes('/tabs/settings')) {
      this.activateLink(4);
      this.currentTitle = 'Settings';
    }
  }
}
