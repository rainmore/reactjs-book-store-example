import './index.scss'

import { NavComponent } from './nav/index'
import { MenuComponent } from './menu/index'

export const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavComponent></NavComponent>
      <section className="main-content columns is-fullheight">
        <div className="column is-3 is-narrow-mobile is-fullheight section">
          <MenuComponent />
        </div>

        <div className="container column is-10 section">
          <section>{children}</section>
        </div>
      </section>
    </>
  )
}
