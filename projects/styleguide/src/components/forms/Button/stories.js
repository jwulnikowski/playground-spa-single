import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

console.log(Button);

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with some black versiomn', () => (
    <Button color="black"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with some emoji', () => (
    <Button className="btn-primary"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));