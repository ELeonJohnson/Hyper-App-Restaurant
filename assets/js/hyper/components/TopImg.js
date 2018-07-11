import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section>
      <h5>
        Welcome
      </h5>
      <h1>
        Prime Steak
      </h1>
      <div class="contact-info">
        <div>Book Table Directory</div>
        <h2>(718) - 219 - 8652</h2>
        <div class="hours">
          Opening Hours <strong>Mon - Fri: </strong> 9am - 9pm
          <strong>Weekend: </strong> 9am - 11pm
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
