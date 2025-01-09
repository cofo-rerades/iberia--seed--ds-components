// import { LitElement, html, type TemplateResult } from 'lit';
import { PfAccordion } from '@patternfly/elements/pf-accordion/pf-accordion.js';
import { customElement } from 'lit/decorators/custom-element.js';
//* Because this WC is formed by 3 web components, we need to import them
/*
import { PfAccordion } from '@patternfly/elements/pf-accordion/pf-accordion.js';
import {
  IbAccordionHeader,
  IbAccordionHeaderChangeEvent,
} from './ib-accordion-header.js';
import { IbAccordionPanel } from './ib-accordion-panel.js';


//* an also needs to export them
export * from './ib-accordion-header.js';
export * from './ib-accordion-panel.js';
*/

import styles from './ib-accordion.css';

/**
 * Iberia Accordion Component
 * @slot - Place element content here
 */
//* Decorator to define the custom element name
@customElement('ib-accordion')
export class IbAccordion extends PfAccordion {
  static readonly styles: CSSStyleSheet[] = [styles];

  constructor() {
    super();
    console.log('IbAccordion initialized');
  }
  /*
  connectedCallback() {
    super.connectedCallback();
    console.log('IbAccordion connected to the DOM');
    const style = new CSSStyleSheet();
    style.replaceSync(`
      :host {
        --pf-global--primary-color--100: #991212;
        --pf-global--link--Color:#991212;
        --pf-c-accordion__toggle--expanded-icon--Rotate:180deg;
        --pf-c-accordion__toggle--IconSize:24px;
        --pf-c-accordion--m-display-lg__toggle--FontSize:0.5rem;
        --pf-c-accordion__toggle--expanded--before--BackgroundColor: transparent;
        --pf-c-accordion__panel--content-body--before--BackgroundColor: transparent;

      }`);
    // Add CSS variables via adoptedStyleSheets
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [
        ...this.shadowRoot.adoptedStyleSheets,
        style,
      ];
    }
  }

  static get observedAttributes() {
    return [...PfAccordion.observedAttributes, 'custom-attribute'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'custom-attribute') {
      console.log(`Custom attribute changed: ${oldValue} -> ${newValue}`);
    }
  }
    */
}

declare global {
  interface HTMLElementTagNameMap {
    'ib-accordion': IbAccordion;
  }
}
