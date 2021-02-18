import { FC } from "react"

interface IconItemProps {
    children: string;
    imgSrc: string;
    className?: string;
}

const IconItem: FC<IconItemProps> = ({ children, imgSrc, className }) => {
    return (
        <div className={`flex items-center ${className}`}>
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