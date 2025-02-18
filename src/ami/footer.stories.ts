import type { Meta, StoryObj } from '@storybook/react';

import { AmiJamFooter } from './footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ami/Footer',
  component: AmiJamFooter,
  parameters: {
    children: 'Typography Content',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof AmiJamFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    footerLinks: ["Like", "Messages", "Notifications"],
    socialLinks: ["instagram", "youtube"]
  },
};
