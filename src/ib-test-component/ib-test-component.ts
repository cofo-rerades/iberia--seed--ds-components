import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './ib-test-component.css';

/**
 * Test Component
 * @slot - Place element content here
 */
@customElement('ib-test-component')
export class IbTestComponent extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  render(): TemplateResult<1> {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ib-test-component': IbTestComponent;
  }
}
