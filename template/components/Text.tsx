import { Typography } from "@/design-system/Tokens/Typography"

type TextType = {
    children?: React.ReactNode;
    className?: string;
    variant?: keyof typeof Typography;
}
export const Text = ({variant = "body", children, className}: TextType) => {
    return (
        <div className={`${Typography[variant]} ${className} text-white dark:text-(--color)`}>{children}</div>
    )
}