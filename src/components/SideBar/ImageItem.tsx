import { FC } from "react"

import { ItemProps } from "./Item"

interface ImageItemProps extends ItemProps {
    imgSrc: string;
}

const ImageItem: FC<ImageItemProps> = ({ children, imgSrc, className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <img
                src={imgSrc}
                className="w-sidebar-icon mr-2"
                alt="Avatar icon"
            />
            {children}
        </div>
    )
}


ImageItem.displayName = "SideBar.ImageItem";

export default ImageItem