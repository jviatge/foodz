import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Ui/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
	args: {

	}
};