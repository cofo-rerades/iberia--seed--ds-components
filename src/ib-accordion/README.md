# Iberia Accordion

`<ib-accordion>` is a web component that provides a collapsible accordion interface for sectioned content.
It based on patternfly accordion component.

Read more about Patternfly Accordion in the [PatternFly Elements Accordion documentation](https://patternflyelements.org/components/accordion).

Read special instruction for Iberia implementation in the [Iberia Design System documentation](https://ds.iberia.com).

## Installation

Load `<ib-accordion>` via CDN:

```html
<script src="https://jspm.dev/@iberia/elements/ib-accordion/ib-accordion.js"></script>
```

Or, if you are using [NPM](https://npm.im), install it

```bash
npm install @iberia/elements
```

Then once installed, import it to your application:

```js
import '@iberia/elements/ib-accordion/ib-accordion.js';
```

## Usage

Iberia Accordion is based on [PatternFly Accordion](https://patternflyelements.org/components/accordion).
It is based on 3 web components:

- `<ib-accordion>`: This will be the block element that wraps the accordion.
- `<ib-accordion-header>`: This will be the header element that wraps the accordion header.
- `<ib-accordion-panel>`: This will be the panel element that wraps the accordion panel.

The `<ib-accordion>` component is the root element of the accordion.

```html
<ib-accordion>
  <ib-accordion-header>
    <h3>Consetetur sadipscing elitr?</h3>
  </ib-accordion-header>
  <ib-accordion-panel>
    <p>
      <a href="#">Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </p>
  </ib-accordion-panel>
  <ib-accordion-header>
    <h3>Labore et dolore magna aliquyam erat?</h3>
  </ib-accordion-header>
  <ib-accordion-panel>
    <p>
      <a href="#">Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </p>
  </ib-accordion-panel>
</ib-accordion>
```
