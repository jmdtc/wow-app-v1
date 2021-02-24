import { FC, ReactNode } from "react"

export interface ItemProps {
    children: ReactNode;
    className?: string;
    onClick: () => void;
}

const Item: FC<ItemProps> = ({ children, className, onClick }) => {
    return (
        <div className={className + " items-center"} onClick={onClick}>
            {children}
        </div>
    )
}


Item.displayName = "SideBar.Item";

export default Item