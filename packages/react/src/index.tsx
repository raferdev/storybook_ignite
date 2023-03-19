import { ComponentProps } from "@stitches/react"
import { styled } from "./styles/index.js"


export const Button = styled('button', {
    fontFamily:'$default',
    backgroundColor:'$ignite500',
    borderRadius:'$md',
    padding:'$4',
    color:'$white',
    border:0,
    variants:{
        size:{
           small:{
            fontSize:"$md",
            padding: '$2'
           },
           big:{
            fontSize:"$lg",
            padding: '$4'
           }
        }
    },
    defaultVariants:{
        size:'small'
    }

})

export type ButtonProps = ComponentProps<typeof Button>