import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styles: [],
})
export class CodeSnippetComponent {
  @Input() code: string | undefined;
  @Input() title: string | null | undefined;
}
