
import React from 'react';
import { action } from '@storybook/addon-actions';
import  CheckBox  from './CheckBox';
import {ComponentStory, ComponentMeta} from "@storybook/react";

export default {
  title: 'Molecules/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox> ;

const Template:ComponentStory<typeof CheckBox>=(args)=>{
  return(
    <CheckBox 
    {...args}
    />
  )
}

export const Default = Template.bind({});
Default.args={
  label:"CheckBox",
  primary:true,
  onClick:action("click")
}

