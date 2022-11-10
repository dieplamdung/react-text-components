import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import children component
import Container from '../Container';
import Typography from './Typography';
// import styles
import '~/styles/global.css';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        'p6',
        'p7',
        'p8',
        'l1',
        'l2',
      ],
    },
  },
  parameters: {
    controls: { include: ['variant', 'align'] },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Container>
    <Typography {...args} />
  </Container>
);

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});
export const P1 = Template.bind({});
export const P2 = Template.bind({});
export const P3 = Template.bind({});
export const P4 = Template.bind({});
export const P5 = Template.bind({});
export const P6 = Template.bind({});
export const P7 = Template.bind({});
export const P8 = Template.bind({});
export const L1 = Template.bind({});
export const L2 = Template.bind({});


H1.args = {
  children: 'H1 Fun for all into the future.\n0123456789',
  variant: 'h1',
};

H2.args = {
  children: 'H2 Fun for all into the future.\n0123456789',
  variant: 'h2',
};

H3.args = {
  children: 'H3 Fun for all into the future.\n0123456789',
  variant: 'h3',
};

H4.args = {
  children: 'H4 Fun for all into the future.\n0123456789',
  variant: 'h4',
};

H5.args = {
  children: 'H5 Fun for all into the future.\n0123456789',
  variant: 'h5',
};

H6.args = {
  children: 'H6 Fun for all into the future.\n0123456789',
  variant: 'h6',
};

P1.args = {
  children: 'P1 Fun for all into the future.\n0123456789',
  variant: 'p1',
};

P2.args = {
  children: 'P2 Fun for all into the future.\n0123456789',
  variant: 'p2',
};

P3.args = {
  children: 'P3 Fun for all into the future.\n0123456789',
  variant: 'p3',
};

P4.args = {
  children: 'P4 Fun for all into the future.\n0123456789',
  variant: 'p4',
};

P5.args = {
  children: 'P5 Fun for all into the future.\n0123456789',
  variant: 'p5',
};

P6.args = {
  children: 'P6 Fun for all into the future.\n0123456789',
  variant: 'p6',
};

P7.args = {
  children: 'P7 Fun for all into the future.\n0123456789',
  variant: 'p7',
};

P8.args = {
  children: 'P8 Fun for all into the future.\n0123456789',
  variant: 'p8',
};

L1.args = {
  children: 'L1 Fun for all into the future.\n0123456789',
  variant: 'l1',
};

L2.args = {
  children: 'L2 Fun for all into the future.\n0123456789',
  variant: 'l2',
};