import { FC } from "react"

import { ItemProps } from "./Item"

interface IconItemProps extends ItemProps {
    imgSrc: string;
}

const IconItem: FC<IconItemProps> = ({ children, imgSrc, className, onClick }) => {
    return (
        <div className={`flex items-center ${className}`} onClick={onClick}>
            <img
                src={imgSrc}
                className="h-avatar mr-2"
                alt="Avatar icon"
            />
            {children}
        </div>
    )
}


IconItem.displayName = "SideBar.IconItem";

export default IconItem