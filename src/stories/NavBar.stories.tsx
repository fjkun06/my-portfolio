import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "@/components";

const meta = {
  title: "Components/Layout/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
