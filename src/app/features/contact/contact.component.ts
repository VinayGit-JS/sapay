import { Component } from '@angular/core';
import { FaqComponent } from '../../shared/components/faq/faq.component';

@Component({
  selector: 'app-contact',
  imports: [FaqComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  emailAddress:string = 'sa.store02@gmail.com'

   // Sample data for FAQs
   questions = [
    {
      text: 'How much will my website cost?',
      answer: 'The cost of your website depends on its features and complexity.',
      open: false,
    },
    {
      text: 'Can I update the website myself after it’s built?',
      answer: 'Yes, you can update it yourself if we build it with a CMS like WordPress.',
      open: false,
    },
    {
      text: 'Will my website be secure?',
      answer: 'Yes, we follow industry best practices to ensure your website is secure.',
      open: false,
    },
  ];

  toggleAnswer(index: number): void {
    this.questions[index].open = !this.questions[index].open;
  }

}
