import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './index';
import { Radio, RadioGroup, Select, Option, Input, Button} from '../index'

storiesOf('Forms/form', module)
  .add('with text', () => (
    <Form onSubmit={(e, state)=> console.log(state)} >
      <Select name="test" label="Magic Label">
        <Option value="1">Magic Label1</Option>
        <Option value="2">Magic Label2</Option>
        <Option value="3">Magic Label3</Option>
        <Option value="4">Magic Label4</Option>
      </Select>

      <RadioGroup name="test2" label="Magic Label">
        <Radio value="1">Magic Label</Radio>
        <Radio value="2">Magic Label2</Radio>
        <Radio value="3">Magic Label3</Radio>
        <Radio value="4">Magic Label4</Radio>
      </RadioGroup>

      <RadioGroup name="test3" label="Magic Label" >
        <Radio value="1">Magic Label</Radio>
        <Radio value="2">Magic Label2</Radio>
        <Radio value="3">Magic Label3</Radio>
        <Radio value="4">Magic Label4</Radio>
      </RadioGroup>
      <Input type="text" name="login" label="login" />
      <Button type="submit"> Send </Button>
    </Form>
  ))
