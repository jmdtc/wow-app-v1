import { FC, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import PageLayout from "../../components/PageLayout"
import Tabs from "../../components/Tabs"

import { RootState } from "../../store/store"
import {
    PageActions,
    RosterTabsActions,
    setActiveTab,
    selectActiveTabByPage
} from "../../slices/navigation"

const Roster: FC = () => {
    const dispatch = useDispatch()
    const { ROSTER } = PageActions

    const tabs = Object.values(RosterTabsActions)
    const selectActiveTab = useMemo(
        selectActiveTabByPage,
        []
    )
    const activeTab = useSelector((state: RootState) =>
        selectActiveTab(state, ROSTER)
    )

    return (
        <PageLayout.Container>
            <PageLayout.Tabs>
                <Tabs.Container value={activeTab}>
                    {tabs.map(tab => (
                        <Tabs.Item
                            key={tab}
                            onClick={() => dispatch(setActiveTab({ page: ROSTER, value: tab }))}
                        >
                            {tab}
                        </Tabs.Item>
                    ))}
                </Tabs.Container>
            </PageLayout.Tabs>
            <PageLayout.Content>
                test
            </PageLayout.Content>
        </PageLayout.Container>
    )
}

export default Roster

/*
        <PageLayout.Container>
            <PageLayout.Tabs>
                <Tabs.Container value={activeTab}>
                    {tabs.map(tab => (
                        <Tabs.Item
                            key={tab}
                            onClick={() => dispatch(setActiveTab({ page: ROSTER, value: tab }))}
                        >
                            {tab}
                        </Tabs.Item>
                    ))}
                </Tabs.Container>
            </PageLayout.Tabs>
            <PageLayout.Content>
                test
            </PageLayout.Content>
        </PageLayout.Container>

*/