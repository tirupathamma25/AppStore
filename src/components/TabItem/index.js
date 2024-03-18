import './index.css'

const TabItem = props => {
  const {tabDetails, changedTabItem, activeTabId} = props
  const {displayText, tabId} = tabDetails
  const isClicked = activeTabId === tabId
  const buttonClassName = isClicked ? 'selected-tab-button' : 'tab-button'
  const tabListClassName = isClicked
    ? 'selected-tab-list-item'
    : 'tab-list-item'

  const onClickTabItem = () => {
    changedTabItem(tabId)
  }
  return (
    <li className={tabListClassName}>
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
