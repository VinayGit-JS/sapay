import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  // Sample data for FAQs
  questions = [
    {
      text: 'How much will my website cost?',
      answer: 'The timeline for building your website depends on several factors, such as the complexity of the design, the number of pages, the features you require (e.g., e-commerce, blog, contact forms), and the need for custom coding. Typically, a simple website may take 4-6 weeks, while more complex websites can take 8-12 weeks or longer. Once we have a better understanding of your needs, we’ll provide a more accurate timeline..',
      open: false,
    },
    {
      text: 'Can I update the website myself after it’s built?',
      answer: 'Yes, we provide you with an easy-to-use content management system (CMS) such as WordPress or a custom solution, which allows you to make updates to your website’s content, such as adding blog posts, updating images, or editing text. If you prefer, we can also offer training to show you how to use it.',
      open: false,
    },
    {
      text: 'Will my website be secure?',
      answer: 'Yes, security is a top priority. We implement best practices to secure your website, including using SSL certificates, ensuring strong password protection, keeping all software up-to-date, and integrating security plugins or features that monitor for potential threats. We also offer ongoing maintenance and security monitoring services.',
      open: false,
    },

    {
      text: '  How do I contact for support?',
      answer: 'you can contact over the email or contact number also .',
      open: false,
    },

    {
      text: 'What is your privacy policy?',
      answer: 'We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information',
      open: false,
    },


  ];

  toggleAnswer(index: number): void {
    this.questions[index].open = !this.questions[index].open;
  }



}
