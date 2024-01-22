import type {TYPE_SIZE} from "types"

export interface ElementProps {
    className?: string,
    onClick?: () => void,
    onChange?: (v : any) => void,
    disabled?: boolean,
}

export interface ElementWithIconProps extends ElementProps {
    icon?: string,
    iconPos?: "left" | "center" | "right",
    iconSize?: TYPE_SIZE,
}