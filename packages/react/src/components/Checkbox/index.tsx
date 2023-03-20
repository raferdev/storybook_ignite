import { ComponentProps } from "@stitches/react";
import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles.js";


export function Checkbox(props:CheckboxProps) {
    return(
        <CheckboxContainer {...props}>
            <CheckboxIndicator asChild={true}>
                <Check weight="bold"/>
            </CheckboxIndicator>
        </CheckboxContainer>
    )
}

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

Checkbox.displayName = 'Checkbox'