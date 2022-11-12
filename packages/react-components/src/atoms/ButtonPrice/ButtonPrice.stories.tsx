import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Import children component
import Container from '../Container';
import ButtonPrice from './ButtonPrice';

// Import styles
import '~/styles/global.css';

export default {
  title: 'Atoms/ButtonPrice',
  component: ButtonPrice,
} as ComponentMeta<typeof ButtonPrice>;

const Template: ComponentStory<typeof ButtonPrice> = (args) => (
  <Container>
    <ButtonPrice {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  buttonProps: {
    variant: 'primary',
    label: 'Buy now'
  },
  priceProps: {
    label: 'From',
    currency: 'SGD',
    amount: 84
  }
};