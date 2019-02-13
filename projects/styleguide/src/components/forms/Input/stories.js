import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';


storiesOf('Forms', module)
  .add('Checkbox', () => (
    <Input type="checkbox" name="test" label="Magic Label" />
  ))
  .add('textarea', () => (
    <Input type="textarea" name="test" label="Magic Label" />
  ))
  .add('radio', () => (
    <Input type="radio" name="test" label="Magic Label" />
  ))
  .add('text', () => (
    <Input type="text" name="test" label="Magic Label" />
  )).add('email', () => (
    <Input type="email" name="test" label="Magic Label" />
  ))