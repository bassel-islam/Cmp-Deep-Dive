import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = 'offline';
  private interval?: number;
  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentStatus =
        this.currentStatus === 'online' ? 'offline' : 'online';
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

}
