import { Box, BoxProps, Text } from "@ignite_ui/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
     title:'Form/Box',
     component:Box,
     args:{
        children: (
            <>
            <Text>Testando</Text>
            </>
        )
     }
} as Meta<BoxProps>

export const Primary:StoryObj<BoxProps> = {
}