/**
 * @description - implement bem transform
 * @author - huang.jian <hjj491229492@hotmail.com>
 *
 * @todo
 *   - validate supported atRule names
 *   - validate bem atRule nest limit
 */

// package
const postcss = require('postcss');
const _ = require('lodash');
// scope
const separators = {
  block: '.',
  element: '__',
  modifier: '--',
};

module.exports = postcss.plugin('postcss-bem-snap', () => {
  const transform = (atRules) => {
    const containerAtRule = _.head(atRules);
    const currentAtRule = _.last(atRules);

    const selector = atRules.reduce((acc, parentsAtRule) => {
      const { name, params } = parentsAtRule;
      const separator = Reflect.get(separators, name) || '';

      return `${acc}${separator}${params}`;
    }, '');
    const newRule = postcss.rule({
      selector,
    });

    currentAtRule.each((node) => {
      if (node.type === 'decl') {
        newRule.append(
          postcss.decl({
            prop: node.prop,
            value: node.value,
          })
        );
      }

      if (node.type === 'atrule') {
        transform([...atRules, node]);
      }
    });

    currentAtRule.root().insertAfter(containerAtRule, newRule);
    currentAtRule.remove();
  };

  // Work with options here
  return (root) => {
    root.walkAtRules('block', (atRule) => {
      transform([atRule]);
    });
  };
});
