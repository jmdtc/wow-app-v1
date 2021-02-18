import { FC } from "react"

import Tabs from "../../components/Tabs"

const Boosts: FC = () => {
    const tabs = ["Dungeons", "Raids", "Arenas"]
    return (
        <div className="">
            <Tabs.Container value="Dungeons">
                {tabs.map(tab => {
                    //if (tab === "Raids" || tab === "Arenas") return <Tabs.Item key={tab} disabled>{tab}</Tabs.Item>
                    return <Tabs.Item key={tab}>{tab}</Tabs.Item>
                })}
            </Tabs.Container>
        </div>
    )
}

export default Boosts