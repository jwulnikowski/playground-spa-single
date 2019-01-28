import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from './index';


storiesOf('PanelHeader', module)
  .add('with text', () => (
    <Panel>Hello Button</Panel>
  ))
  .add('with some emoji', () => (
    <Panel><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Panel>
  ));