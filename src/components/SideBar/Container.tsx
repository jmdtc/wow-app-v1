import {
    FC,
    Children,
    isValidElement,
    cloneElement
} from "react"

import Item from "./Item"
import PictureItem from "./PictureItem"

type SideBarCompositionType = {
    Item: typeof Item;
    PictureItem: typeof PictureItem;
}

const Container: FC & SideBarCompositionType = ({ children }) => {
    return (
        <div className="fixed h-screen w-56 bg-indigo-500 text-white font-semibold pt-2">
            {Children.map(children, child => {
                if (isValidElement(child)) {
                    return cloneElement(child, {
                        className: "cursor-pointer hover:bg-indigo-700 p-4 truncate"
                    })
                }
                return child
            })}
        </div>
    )
}

Container.Item = Item;
Container.PictureItem = PictureItem;

export default Container