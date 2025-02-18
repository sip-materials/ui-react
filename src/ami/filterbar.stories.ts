import type { Meta, StoryObj } from '@storybook/react';

import { AmiJamFilterbar } from './filterbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ami/Filterbar',
  component: AmiJamFilterbar,
  parameters: {
    children: 'Typography Content',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { },
} satisfies Meta<typeof AmiJamFilterbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    prefectureCode: "",
    cityCode: "",
    distance: 0,
    ageRanges: [],
    purposes: [
      {
        id: '1',
        name: 'seeking members',
        name_jp: 'seeking members'
      }
    ],
    purposeIds: [],
    genders: [
      {
        id: '1',
        name: 'Male',
        name_jp: 'Male',
      },
      {
        id: '2',
        name: 'Female',
        name_jp: 'Female',
      }
    ],
    genderId: "",
    genres: [],
    genreIds: [],
    instruments: [],
    instrumentIds: [],
    skillLevels: [
      {
        id: '1',
        name: 'beginner',
        name_jp: 'beginner',
      }
    ],
    skillLevelIds: [],
    professionalLevels: [
      {
        id: '1',
        name: 'hobbyist',
        name_jp: 'hobbyist'
      }
    ],
    professionalLevelIds: [],
    performanceClips: [],
    positions: [],
    positionIds: [],
  },
};
