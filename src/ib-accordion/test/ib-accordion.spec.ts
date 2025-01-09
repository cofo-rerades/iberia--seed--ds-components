import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
// import { IbAccordion } from '@iberia/elements/ib-accordion/ib-accordion.js';
import { IbAccordion } from '../ib-accordion.js';

describe('<ib-accordion>', () => {
  describe('simply instantiating', () => {
    let element: IbAccordion;
    it('imperatively instantiates', () => {
      expect(document.createElement('ib-accordion')).to.be.an.instanceof(
        IbAccordion,
      );
    });

    it('should upgrade', async () => {
      element = await createFixture<IbAccordion>(
        html`<ib-accordion></ib-accordion>`,
      );
      const klass = customElements.get('ib-accordion');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and.to.be.an.instanceOf(IbAccordion);
    });
  });
});
