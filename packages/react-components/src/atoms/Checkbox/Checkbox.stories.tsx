import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Import children component
import Container from '../Container';
import CheckBox from './Checkbox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <Container>
    <CheckBox {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  onChange: () => { }
};