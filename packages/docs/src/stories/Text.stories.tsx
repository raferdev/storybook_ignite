import { Text, TextProps } from "@ignite_ui/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
     title:'Form/Text',
     component:Text,
     args:{
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit, exercitationem nam aspernatur iure, mollitia a eum voluptatum accusamus numquam, repudiandae quaerat doloremque fugit? Non necessitatibus at maiores. Nobis, explicabo!",
        size: 'md'
    },
     argTypes: {

      size: {
        options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
        control: {
           type: 'inline-radio'
        }  }
    }
} as Meta<TextProps>

export const Primary:StoryObj<TextProps> = {
}
export const CustomTag:StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong',
    }
}