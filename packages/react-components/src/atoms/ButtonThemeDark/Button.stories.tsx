import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Import children component
import Button from '~/atoms/Button';
import Container from '../Container';

// Import styles
import '~/styles/global.css';
import { IconArrowDown, IconPlaceholder } from '../Icon';

export default {
  title: 'Atoms/ButtonThemeDark',
  component: Button,
  argTypes: {
    variant: {
      options: ['primaryDark', 'secondaryDark', "secondaryBlack"],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { include: ['variant', 'disabled', 'children', 'externalLink'] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Container
    sx={{
      minHeight: '100vh',
      paddingTop: '30px'
    }}
  >
    <Button {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'secondaryBlack',
  children: 'Button',
  disabled: true,
  externalLink: 'link',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  variant: 'secondaryBlack',
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
