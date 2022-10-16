import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem10'
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {} // criado apenas para o storybook conseguir entender que ha uma exportação sem default

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Testando</h1>
    )
  }
}
