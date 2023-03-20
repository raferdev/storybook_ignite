import { Heading, HeadingProps } from "@ignite_ui/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
     title:'Form/Heading',
     component:Heading,
     args:{
        children: "Custom Text",
     }
} as Meta<HeadingProps>

export const Primary:StoryObj<HeadingProps> = {
}
export const CustomTag:StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1',
    },
    parameters: {
        docs: {
            description: {
                story: "The default html elemtn is h2 but using the parameter 'as' you can change to h1,h3..."
            }
        }
    }
}