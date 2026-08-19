import stcblLogo from "../assets/brand";
import Icon from "./Icon";

function Topbar() {
  return (
    <header className="topbar">
      <div className="mobile-brand">
        <img src={stcblLogo} alt="State Trading Corporation of Bhutan Ltd." />
      </div>
      <div className="portal-label">
        CEO Portal <span>Overall performance</span>
      </div>
      <div className="search">
        <Icon name="search" size={18} />
        <input placeholder="Search reports, people, assets..." />
        <kbd>⌘ K</kbd>
      </div>
      <div className="top-actions">
        <button className="icon-button" aria-label="Notifications">
          <Icon name="bell" />
          <i></i>
        </button>
        <div className="avatar small">LD</div>
      </div>
    </header>
  );
}

export default Topbar;
