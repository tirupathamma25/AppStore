import './index.css'

const AppItem = props => {
  const {appDetails, activeTabId} = props
  const {appName, imageUrl, category} = appDetails
  const selectedAppItem = category === activeTabId
  return (
    <div>
      {selectedAppItem ? (
        <li className="app-list-item">
          <img src={imageUrl} alt={appName} className="app-image" />
          <p className="app-name">{appName}</p>
        </li>
      ) : (
        ''
      )}
    </div>
  )
}

export default AppItem
