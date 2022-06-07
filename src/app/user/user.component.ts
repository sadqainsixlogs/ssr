import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public list: any[] = [
    {
      title: "Section 1",
      children: []
    },
    {
      title: "Section 2",
      children: [
        {
          title: "Section 2.1",
          children: []
        },
        {
          title: "Section 2.2",
          children: []
        },
        {
          title: "Section 2.3",
          children: []
        }
      ]
    },
    {
      title: "Section 3",
      children: [
        { title: "Section 3.1", children: [] },
        {
          title: "Section 3.2",
          children: [
            {
              title: "Section 3.2.1",
              children: []
            },
            {
              title: "Section 3.2.2",
              children: []
            },
            {
              title: "Section 3.2.3",
              children: [
                {
                  title: "Section 3.2.3.1",
                  children: []
                },
                {
                  title: "Section 3.2.3.2",
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: "Section 3.3",
          children: [
            {
              title: "Section 3.3.1",
              children: []
            },
            {
              title: "Section 3.3.2",
              children: []
            }
          ]
        }
      ]
    }
  ];
  title: any;
  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('App/User');
    this.title = this.titleService.getTitle();
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Title, User Component' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Maruf Khan' },
      { name: 'description', content: 'This is a sample description of user component' }
    ]);
  }

}
