import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import children component
import Container from '../Container';
import Button from './Button';

// Import styles
import '~/styles/global.css';
import { IconArrowDown, IconPlaceholder } from '../Icon';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { include: ['variant', 'disabled', 'children', 'externalLink'] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'Button',
  disabled: true,
  externalLink: 'link',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  variant: 'primary',
  children: 'Button',
  startIcon: <IconPlaceholder htmlColor="#E60000" />,
  disabled: false,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  variant: 'primary',
  children: 'Button',
  endIcon: <IconArrowDown htmlColor="#E60000" />,
  disabled: false,
};

export const Both = Template.bind({});
Both.args = {
  variant: 'primary',
  children: 'Button',
  startIcon: <IconPlaceholder htmlColor="#E60000" />,
  endIcon: <IconArrowDown htmlColor="#E60000" />,
  disabled: false,
};

export const AsText = Template.bind({});
AsText.args = {
  variant: 'text',
  children: 'Button as text',
  endIcon: <ArrowForwardIcon />,
  disabled: false,
  sx: {
    background: 'transparent',
    '&:hover': {
      background: 'transparent',
      color: 'coral',
    },
  }
};
