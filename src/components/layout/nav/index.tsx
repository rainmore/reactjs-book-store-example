import './index.scss'

type Props = {
  isAuthenticated: boolean
}

export const NavComponent = (props: Props) => {
  return (
    <>
      <nav className="navbar is-flex-tablet is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item title" href="#">
            {import.meta.env.VITE_APP_TITLE}
          </a>
        </div>

        {props.isAuthenticated && (
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Your name</a>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item">Change Profile</a>
                <a className="navbar-item">Update password</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Logout</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
