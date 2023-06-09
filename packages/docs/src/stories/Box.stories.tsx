import { Box, BoxProps, Text } from "@raferdev_study/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
     title:'Form/Box',
     component:Box,
     args:{
        children: (
            <>
            <Text>Box Text</Text>
            </>
        )
     },
     argTypes: {
        children:{
            control:{
                type:null
            }
        }
     }
} as Meta<BoxProps>

export const Primary:StoryObj<BoxProps> = {
}