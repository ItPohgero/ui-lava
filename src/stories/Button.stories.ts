import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { LavaButton } from '../'
const meta = {
  title: 'Example/Button',
  component: LavaButton,
  parameters: {},
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof LavaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};