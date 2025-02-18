import type { Meta, StoryObj } from '@storybook/react';

import { AmiJamHeader } from './header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ami/Header',
  component: AmiJamHeader,
  parameters: {
    children: 'Typography Content',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof AmiJamHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    menuElements: ["Like", "Messages", "Notifications"],
    user: {
      userId: '1',
      avatar: '',
      nickname: 'Developer'
    }
  },
};
