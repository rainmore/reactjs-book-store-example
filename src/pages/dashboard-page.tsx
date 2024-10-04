import React from 'react'
import { toastService } from '../services/toast-service'

const DashboardPage: React.FC = () => {
  return (
    <>
      <h1>Welcome to my website</h1>
      <p>Here's some content for the homepage</p>

      <div className="buttons">
        <button className="button is-info" onClick={() => toastService.info('Here is your toast.')}>
          Info
        </button>
        <button className="button is-success" onClick={() => toastService.success('Here is your toast.')}>
          Success
        </button>
        <button
          className="button is-warning"
          onClick={() =>
            toastService.warn(
              'Here is your toast. Here is your toast.Here is your toast.\n\nHere is your toast.Here is your toast.Here is your toast.Here is your toast.'
            )
          }
        >
          Warning
        </button>
        <button className="button is-danger" onClick={() => toastService.error('Here is your toast.')}>
          Danger
        </button>
        <button className="button is-primary">Primary</button>
        <button className="button is-link">Link</button>
        <button className="button is-black">Black</button>
        <button className="button is-white">White</button>
        <button className="button is-dark">Dark</button>
        <button className="button is-light">Light</button>
      </div>
    </>
  )
}

export default DashboardPage
