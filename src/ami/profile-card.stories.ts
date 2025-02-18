import type { Meta, StoryObj } from '@storybook/react';

import { AmiJamProfileCard } from './profile-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ami/ProfileCard',
  component: AmiJamProfileCard,
  parameters: {
    children: 'Typography Content',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof AmiJamProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: "Williams",
    location: "Tokyo Prefecture, Shipuya",
    genres: [],
    instrument: "Saxophone",
    skillLevel: "Advanced",
    activityFrequency: "4 times a week",
    performanceClips: true,
    professionalLevel: "Semi-professional",
    avatar: "",
    matchPercentage: 75,
  },
};
