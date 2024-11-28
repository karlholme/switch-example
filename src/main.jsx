import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch } from './Switch.jsx'
import './index.scss'

function App() {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className="m-1">
      <Switch
        value={checked}
        onChange={setChecked}
        label={'Detta är en label'}
        info={'Detta är extrainformation'}
        disabled={false}
        required={true}
        isComponentValid={false}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
