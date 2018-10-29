import * as React from 'react';
import { createRenderer, ShallowRenderer } from 'react-test-renderer/shallow';

import { Header } from './header.component';

describe('Header test', () => {
  let renderer: ShallowRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    renderer.render(<Header title="Willson" />);
  });

  it('should render correctly', () => {
    const result = renderer.getRenderOutput();
    chai.assert.strictEqual(result.type, 'div');
  });

  it('should have correct prop values', () => {
    const result = renderer.getRenderOutput();
    const propValues = result.props.children.props.children;
    chai.assert.strictEqual(propValues, 'Willson');
  });
});