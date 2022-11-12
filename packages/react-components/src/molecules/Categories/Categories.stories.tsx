import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from '~/atoms/Container';
import HorizontalNewsCard from './Categories';

export default {
  title: 'Molecules/Categories',
  component: HorizontalNewsCard,
} as ComponentMeta<typeof HorizontalNewsCard>;


const Template: ComponentStory<typeof HorizontalNewsCard> = (args) => (
  <Container>
    <HorizontalNewsCard {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Elden Ring',
  mainImage: 'https://images.ctfassets.net/hnoi7ctzfs57/77hZVZCXGOUzUYo8dmhmRE/1191dfe00840a83ed7f6a2ed82b1f02d/Frame_123791.jpg',
  mainImageNext: '',
  linkHref: '/'
};