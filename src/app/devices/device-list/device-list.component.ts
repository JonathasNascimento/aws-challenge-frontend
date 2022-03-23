import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  displayedColumns: string[] = ['category', 'color', 'partNumber', 'action']
  dataSource = [
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
    { category: 'cat-1', color: 'white', partNumber: '12345' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
