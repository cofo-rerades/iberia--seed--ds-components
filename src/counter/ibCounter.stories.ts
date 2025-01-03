import { html, TemplateResult } from 'lit';
import './ib-counter.js';

export default {
  title: 'examples/counter',
  component: 'ib-counter',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface ArgTypes {
  header?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  header = 'Hello link world',
  counter = 5,
  textColor,
  slot,
}: ArgTypes) => html`
  <ib-counter
    style="--ib-counter-text-color: ${textColor || 'red'}"
    .header=${header}
    .counter=${counter}
  >
    ${slot}
  </ib-counter>
`;

export const Regular = Template.bind({});

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'My header',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
