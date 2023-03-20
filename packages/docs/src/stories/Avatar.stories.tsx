import { Avatar, AvatarProps } from "@ignite_ui/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
     title:'Data Display/Avatar',
     component:Avatar,
     args:{
        src: "https://github.com/raferdev.png",
        alt: "Rafael Fernandes"
     }
} as Meta<AvatarProps>

export const Primary:StoryObj<AvatarProps> = {
}

export const WithFallback:StoryObj<AvatarProps> = {
    args:{
        src: undefined
    }

}
