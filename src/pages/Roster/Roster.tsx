import { FC, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import Tabs from "../../components/Tabs"

import { RootState } from "../../store/store"
import {
    PageActions,
    RosterTabsActions,
    setActiveTab,
    selectActiveTabByPage
} from "../../slices/navigation"

const Roster: FC = () => {
    const { ROSTER } = PageActions
    
    const tabs = Object.values(RosterTabsActions)
    const selectActiveTab = useMemo(
        selectActiveTabByPage,
        []
    )
    const activeTab = useSelector((state: RootState) =>
        selectActiveTab(state, ROSTER)
    )

    return (
        <div className="">
            <Tabs.Container value={activeTab}>
                {tabs.map(tab => {
                    return <Tabs.Item key={tab}>{tab}</Tabs.Item>
                })}
            </Tabs.Container>
        </div>
    )
}

export default Roster