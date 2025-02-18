import type { Meta, StoryObj } from '@storybook/react';

import { AmiJamLogo } from './logo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ami/Logo',
  component: AmiJamLogo,
  parameters: {
    children: 'Typography Content',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof AmiJamLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "md"
  },
};
