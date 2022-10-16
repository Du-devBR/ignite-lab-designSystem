import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem10'
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {} // criado apenas para o storybook conseguir entender que ha uma exportação sem default

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  },
  argTypes: {
    asChild: {
      table: {
        disabled: true,
      }
    }
  }
}
