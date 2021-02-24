import {
    FC,
    Children,
    isValidElement,
    cloneElement,
} from "react"

import Item from "./Item"
import ImageItem from "./ImageItem"

type SideBarCompositionType = {
    Item: typeof Item;
    ImageItem: typeof ImageItem;
}

interface ContainerProps {
    selectedPage: string;
}

const Container: FC<ContainerProps> & SideBarCompositionType = ({ children, selectedPage }) => {    
    const commonClasses = "flex items-center cursor-pointer p-2 my-4 rounded-md truncate"
    const nonSelected = "hover:bg-indigo-600"
    const selectedPageClassName = "bg-indigo-700 font-semibold"
    
    return (
        <div className="fixed h-screen w-56 pt-2 px-4 bg-indigo-500 text-white capitalize">
            {Children.map(children, child => {
                if (isValidElement(child) && child.key === selectedPage) {
                    return cloneElement(child, {
                        className: `${commonClasses} ${selectedPageClassName}`,
                    })
                }
                if (isValidElement(child)) {
                    return cloneElement(child, {
                        className: `${commonClasses} ${nonSelected}`,
                    })
                }
                return child
            })}
        </div>
    )
}

Container.Item = Item;
Container.ImageItem = ImageItem;

export default Container