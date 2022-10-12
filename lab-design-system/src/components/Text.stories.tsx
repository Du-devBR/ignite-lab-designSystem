import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem10'
  }
} as Meta<TextProps>

export const Default: StoryObj = {} // criado apenas para o storybook conseguir entender que ha uma exportação sem default
