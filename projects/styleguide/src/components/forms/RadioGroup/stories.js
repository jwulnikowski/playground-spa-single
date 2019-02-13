import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroup, {Radio} from './index';


storiesOf('Forms/radioGroup', module)
  .add('Default', () => (
    <RadioGroup name="test" label="Magic Label" onChange={console.log}>
      <Radio value="1"> Magic Label</Radio>
      <Radio value="2"> Magic Label2</Radio>
      <Radio value="3"> Magic Label3</Radio>
      <Radio value="4"> Magic Label4</Radio>
    </RadioGroup>
  )).add('By option param', () => (
    <RadioGroup name="test" label="Magic Label" onChange={console.log} options={[
      {
        value: "1",
        label: "Magic label"
      }, {
        value: "2",
        label: "Magic label"
      }, {
        value: "3",
        label: "Magic label"
      }
    ]} />
  ))
  .add('Controled Value', () => (
    <RadioGroup name="test" label="Magic Label" value="3" onChange={console.log}>
      <Radio value="1"> Magic Label</Radio>
      <Radio value="2"> Magic Label2</Radio>
      <Radio value="3"> Magic Label3</Radio>
      <Radio value="4"> Magic Label4</Radio>
    </RadioGroup>
  ))