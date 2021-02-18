import { FC, ReactNode } from "react"

interface ItemProps {
    children: ReactNode;
    className?: string;
}

const Item: FC<ItemProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <span>{children}</span>
        </div>
    )
}


Item.displayName = "SideBar.Item";

export default Item