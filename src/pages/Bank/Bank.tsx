import { FC, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

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
        <div>
            <div className="-mt-8 -ml-4">
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
            </div>

            <div className="mt-8">
                test
            </div>
        </div>
    )
}

export default Bank