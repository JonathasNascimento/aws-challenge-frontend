import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['category', 'action']
  dataSource = [
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
    { id: 1, name: 'cat-1' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
