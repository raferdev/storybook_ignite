import { ComponentProps } from "@stitches/react";
import { forwardRef,ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from "./styles.js";

export interface TextInputProps extends ComponentProps<typeof Input>{
    prefix?:string
}
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps >(({prefix, ...props}:TextInputProps, ref) => {
    return (
    <TextInputContainer>
        {!!prefix&&<Prefix>{prefix}</Prefix>}
        <Input {...props}/>
    </TextInputContainer>)
})

TextInput.displayName = 'TextInput'