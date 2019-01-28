import { configure } from '@storybook/react';

var requireTest = require.context('../src/components/', true, /stories\.js$/);

function loadStories() {
  requireTest.keys().forEach(requireTest);

  // require('../src/components/forms/Button/stories');
  // require('../src/components/panels/stories');
  // You can require as many stories as you need.

}

configure(loadStories, module);