import { ReactNode, useEffect } from "react"
import { StyledModal } from "./styled"

const DEFAULT_DELAY = 2000

interface ModalProps {
    children: ReactNode
    isOpen: boolean
    onOpenChage: (isOpen: boolean) => void
    delay?: number
}

export const Modal = ({ children, delay, isOpen, onOpenChage }: ModalProps) => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onOpenChage(!isOpen);

        }, delay ?? DEFAULT_DELAY);

        return () => clearTimeout(timeoutId);
    }, [onOpenChage, delay]);

    return (
        <StyledModal>
            <div>
                {children}
            </div>
        </StyledModal>
    )
}