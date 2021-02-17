import { FC } from "react"

interface PictureItemProps {
    children: string;
    imgSrc: string;
    className?: string;
}

const PictureItem: FC<PictureItemProps> = ({ children, imgSrc, className }) => {
    return (
        <div className={"flex items-center " + className}>
            <img
                src={imgSrc}
                className="h-avatar mr-2"
                alt="Avatar icon"
            />
            {children}
        </div>
    )
}


PictureItem.displayName = "SideBar.PictureItem";

export default PictureItem