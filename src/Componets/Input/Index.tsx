import { StyledContainerInput } from "./styled"
import { InputHTMLAttributes, forwardRef } from "react"
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  rightElement?: React.ReactNode
  
}
export const Input = forwardRef<HTMLInputElement, IInputProps>(({ label, rightElement, ...rest }, ref) => {

    return (
        <>
        <StyledContainerInput>
            <div>
                <label>{label}</label>
                <input ref={ref} {...rest} />
            </div>
            {rightElement}
        </StyledContainerInput>
        </>
    )
})