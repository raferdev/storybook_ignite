import { Box, BoxProps } from "@ignite_ui/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
     title:'Form/Box',
     component:Box,
     args:{
        children: (
            <>
            <h1>Testando</h1>
            </>
        )
     }
} as Meta<BoxProps>

export const Primary:StoryObj<BoxProps> = {
}