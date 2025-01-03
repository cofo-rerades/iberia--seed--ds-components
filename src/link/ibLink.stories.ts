import { html, TemplateResult } from 'lit';
import './ib-link.js';

export default {
  title: 'examples/link',
  component: 'ib-link',
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
  <ib-link
    style="--ib-link-text-color: ${textColor || 'green'}"
    .header=${header}
    .counter=${counter}
  >
    ${slot}
  </ib-link>
`;

export const Regular = Template.bind({});

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'My header link',
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
