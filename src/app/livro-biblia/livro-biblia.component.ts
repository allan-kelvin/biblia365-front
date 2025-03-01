import { Component, NgModule } from '@angular/core';
import { BibleService } from '../bible/bible.service';

@Component({
  selector: 'app-livro-biblia',
  standalone: true,
  imports: [],
  templateUrl: './livro-biblia.component.html',
  styleUrl: './livro-biblia.component.css'
})
export class LivroBibliaComponent {
  books: any[];

  constructor(private bibleService: BibleService) {}

  ngOnInit() {
    this.bibleService.getBooks().subscribe(response => {
      this.books = response;
    });
  }
}

