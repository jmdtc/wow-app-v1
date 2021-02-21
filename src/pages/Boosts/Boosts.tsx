import { FC, useMemo } from "react"
import { useSelector } from "react-redux"

import Tabs from "../../components/Tabs"

import { RootState } from "../../store/store"
import {
    PageActions,
    BoostsTabsActions,
    selectActiveTabByPage
} from "../../slices/navigation"

const Boosts: FC = () => {
    const { BOOSTS } = PageActions
    const { RAIDS, ARENAS } = BoostsTabsActions

    const tabs = Object.values(BoostsTabsActions)
    const selectActiveTab = useMemo(
        selectActiveTabByPage,
        []
    )
    const activeTab = useSelector((state: RootState) =>
        selectActiveTab(state, BOOSTS)
    )

    return (
        <div>
            <div className="-mt-8 -ml-4">
                <Tabs.Container value={activeTab}>
                    {tabs.map(tab => {
                        if (tab === RAIDS || tab === ARENAS) return <Tabs.Item key={tab} disabled>{tab}</Tabs.Item>
                        return <Tabs.Item key={tab}>{tab}</Tabs.Item>
                    })}
                </Tabs.Container>
            </div>

            <div className="mt-8">
                test
            </div>
        </div>
    )
}

export default Boosts