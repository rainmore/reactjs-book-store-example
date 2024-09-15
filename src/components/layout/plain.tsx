import { NavComponent } from './nav/index'

export const PlainLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const props = {
    isAuthenticated: false,
  }
  return (
    <>
      <NavComponent isAuthenticated={props.isAuthenticated}></NavComponent>
      <section className="main-content columns is-fullheight">
        <div className="container column is-10 section">
          <section>{children}</section>
        </div>
      </section>
    </>
  )
}
