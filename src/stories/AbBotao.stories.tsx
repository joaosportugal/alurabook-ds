import { Meta, StoryFn } from '@storybook/react'
import { AbBotao } from '../components/AbBotao'

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao
} as Meta<typeof AbBotao>

const Template: StoryFn<typeof AbBotao> = () => <AbBotao />

export const Primary = Template.bind({})
