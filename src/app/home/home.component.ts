import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sampleData = [
    {
      header: 'Header',
      title: 'card title',
      type: 'primary',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'secondary',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'success',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'danger',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'warning',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'info',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'light',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      header: 'Header',
      title: 'card title',
      type: 'dark',
      description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    }
  ]
  title: any;
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('App/Home');
    this.title = this.titleService.getTitle();
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Title, Home Component' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Maruf Khan' },
      { name: 'description', content: 'This is a sample description of home component' }
    ]);
  }

}
