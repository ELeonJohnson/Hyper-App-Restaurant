import {h, app} from 'hyperapp'
import Header from './Header.js'
import TopImg from './TopImg.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} action={actions}/>
      <TopImg state={state} action={actions}/>
      
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
