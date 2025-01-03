import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IbCounter } from './IbCounter.js';
import './ib-counter.js';

describe('Ib25', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<IbCounter>(html`<ib-counter></ib-counter>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<IbCounter>(html`<ib-counter></ib-counter>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<IbCounter>(
      html`<ib-counter header="attribute header"></ib-counter>`,
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IbCounter>(html`<ib-counter></ib-counter>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
