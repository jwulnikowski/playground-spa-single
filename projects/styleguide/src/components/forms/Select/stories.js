import React from 'react';
import { storiesOf } from '@storybook/react';
import Select, {Option} from './index';


storiesOf('Forms/Select', module)
  .add('Default', () => (
    <Select name="test" label="Magic Label" onChange={console.log}>
      <Option value="1">Magic Label1</Option>
      <Option value="2">Magic Label2</Option>
      <Option value="3">Magic Label3</Option>
      <Option value="4">Magic Label4</Option>
    </Select>
  )).add('By the config', () => (
    <Select
      name="test"
      label="Magic Label"
      onChange={console.log}
      options={[
        {
          value: "1",
          label: "Magic label"
        }, {
          value: "1",
          label: "Magic label"
        }, {
          value: "1",
          label: "Magic label"
        }
      ]}
    />
  ))
  .add('Controled Value', () => (
    <Select name="test" label="Magic Label" value="3" onChange={console.log}>
      <Option value="1">Magic Label1</Option>
      <Option value="2">Magic Label2</Option>
      <Option value="3">Magic Label3</Option>
      <Option value="4">Magic Label4</Option>
    </Select>
  ))