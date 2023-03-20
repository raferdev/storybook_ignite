import { Button, ButtonProps } from "@ignite_ui/react";
import type { StoryObj, Meta } from '@storybook/react'
import {ArrowRight} from 'phosphor-react'
export default {
     title:'Form/Button',
     component:Button,
     args: {
        children:'Send'
     }

} as Meta<ButtonProps>

export const Primary:StoryObj<ButtonProps> = {
}
export const Secondaty:StoryObj<ButtonProps> = {
   args: {
      variant:'secondary',
      children:'New'
   }
}
export const Tertiary:StoryObj<ButtonProps> = {
   args: {
      variant:'tertiary',
      children: 'Cancel'
   }
}
export const Small:StoryObj<ButtonProps> = {
   args: {
      size:'sm',
      children: 'Cancel'
   }
}
export const Disable:StoryObj<ButtonProps> = {
   args: {
      disabled:true
   }
}
export const WithIcon:StoryObj<ButtonProps> = {
   args: {
      children:
       <>
         Next Step
         <ArrowRight weight="bold"/>
      </>
   }
}