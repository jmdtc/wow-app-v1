import { FC, ReactNode } from "react"

export interface ItemProps {
    children: ReactNode;
    className?: string;
    onClick: () => void;
}

const Item: FC<ItemProps> = ({ children, className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <span>{children}</span>
        </div>
    )
}


Item.displayName = "SideBar.Item";

export default Item