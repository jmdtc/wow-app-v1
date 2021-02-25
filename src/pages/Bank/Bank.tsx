import { FC, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import PageLayout from "../../components/PageLayout"
import Tabs from "../../components/Tabs"

import { RootState } from "../../store/store"
import {
    PageActions,
    BankTabsActions,
    setActiveTab,
    selectActiveTabByPage
} from "../../slices/navigation"

const Bank: FC = () => {
    const dispatch = useDispatch()
    const { BANK } = PageActions

    const tabs = Object.values(BankTabsActions)
    const selectActiveTab = useMemo(
        selectActiveTabByPage,
        []
    )
    const activeTab = useSelector((state: RootState) =>
        selectActiveTab(state, BANK)
    )

    return (
        <PageLayout.Container>
            <PageLayout.Tabs>
                <Tabs.Container value={activeTab}>
                    {tabs.map(tab => (
                        <Tabs.Item
                            key={tab}
                            onClick={() => dispatch(setActiveTab({ page: BANK, value: tab }))}
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

export default Bank