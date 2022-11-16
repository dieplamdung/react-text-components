import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button  from './Button';
import {ComponentStory, ComponentMeta} from "@storybook/react";

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button> ;

const Template:ComponentStory<typeof Button>=(args)=>{
  return(
    <Button 
    {...args}
    />
  )
}

export const Default = Template.bind({});
Default.args={
  label:"Button",
  primary:true,
  onClick:action("click")
}

