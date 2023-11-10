import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as Avatar from './Avatar';
import { AvatarImage } from './Avatar';

const meta = {
  title: 'Primary/Avatar',
};
export default meta;

type Story = StoryObj<typeof Avatar.Root>;

export const Primary: Story = {
  render: args => (
    <Avatar.Root>
      <h1>테스트</h1>
      <AvatarImage
        src="https://ssl.pstatic.net/melona/libs/1470/1470846/7382f679e530376e013b_20231026164703343.jpg"
        style={{ width: '200px', height: '300px' }}
      ></AvatarImage>
    </Avatar.Root>
  ),
};
