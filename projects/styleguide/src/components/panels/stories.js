import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from './Panel';
import PanelHeader from './PanelHeader';


storiesOf('Panel', module)
  .add('with text', () => (
    <Panel>
      <PanelHeader/>
      Hello Button
      </Panel>
  ))
  .add('with some emoji', () => (
    <Panel><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Panel>
  ));