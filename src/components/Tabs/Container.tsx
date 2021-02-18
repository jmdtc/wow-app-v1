import { FC, Children, isValidElement, cloneElement } from "react"

import Item from "./Item"

interface ContainerProps {
    value: string;
}

type TabsCompositionType = {
    Item: typeof Item;
}

const Container: FC<ContainerProps> & TabsCompositionType = ({ children, value }) => {
    return (
        <div className="flex w-full">
            {Children.map(children, child => {
                if (isValidElement(child) && value === child.key && !child.props.disabled) {
                    return cloneElement(child, {active: true})
                }
                return child
            })}
        </div>
    )
}

Container.Item = Item;

export default Container