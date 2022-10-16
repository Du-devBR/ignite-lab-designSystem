import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create acount'
  },
  argTypes: {
    
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {} // criado apenas para o storybook conseguir entender que ha uma exportação sem default