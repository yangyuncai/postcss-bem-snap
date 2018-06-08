/**
 * @description - UT BEM plugin
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// package
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
// internal
const bem = require('../');
// scope
const snapshot = path.resolve(__dirname, '__fixture__', 'bem.pcss');
const content = fs.readFileSync(snapshot, { encoding: 'utf8' });

describe('postcss-bem-snap', () => {
  it('should complete standard workflow', () => {
    const plugins = [bem()];

    return postcss(plugins)
      .process(content, { from: '' })
      .then((result) => {
        expect(result.css).toMatchSnapshot();
        expect(result.warnings().length).toBe(0);
      });
  });
});
