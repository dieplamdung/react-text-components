import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Import children component
import Container from '../Container';
import RadioButton from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <Container>
    <RadioButton {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  onChange: () => { }
};