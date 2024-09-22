import './index.scss';

export const MenuComponent = () => {
  return (
    <>
      <aside className="menu main-menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a>Dashboard</a>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a className="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
      </aside>

      <aside className="menu sub-menu menu-end is-hidden-mobile">
        <ul className="menu-list">
          <li>
            <a href="https://rainmore.com.au">Powered By Rainmore</a>
          </li>
        </ul>
      </aside>
    </>
  );
};
