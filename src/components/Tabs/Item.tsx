import { FC, ReactNode } from "react"

interface ItemProps {
    children: ReactNode;
    active?: boolean;
    disabled?: boolean;
}

const computeClassName = function (
    active: boolean | undefined,
    disabled: boolean
): string {
    const baseClasses = "inline-flex justify-center h-12 w-tab ease-in-out"
    const selectableClasses = "cursor-pointer border-b-2 border-transparent rounded hover:bg-indigo-200 hover:bg-opacity-25"
    const activeClasses = "cursor-pointer font-semibold border-b-2 border-indigo-500 text-indigo-700"
    const disabledClasses = "cursor-not-allowed text-gray-400"

    if (disabled) return `${baseClasses} ${disabledClasses}`
    if (active) return `${baseClasses} ${activeClasses}`
    return `${baseClasses} ${selectableClasses}`
}

const Item: FC<ItemProps> = ({ children, active, disabled = false }) => {
    const computedClassName = computeClassName(active, disabled)

    return (
        <div className={computedClassName}>
            <span className="inline-flex items-center">{children}</span>
        </div>
    )
}


Item.displayName = "Tabs.Item";

export default Item