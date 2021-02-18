import { FC } from "react"

interface ItemProps {
    children: string;
    className?: string;
}

const Item: FC<ItemProps> = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}


Item.displayName = "SideBar.Item";

export default Item