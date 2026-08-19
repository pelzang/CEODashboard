import stcblLogo from '../assets/brand'
import Icon from './Icon'
import { navItems } from '../data/dashboard'

function Sidebar({ activeSection, onSelect }) {
  return <aside className="sidebar">
    <div className="brand"><img src={stcblLogo} alt="State Trading Corporation of Bhutan Ltd."/></div>
    <nav><p className="nav-caption">Executive workspace</p>{navItems.map(([label, icon]) => <button key={label} className={`nav-item ${activeSection === label ? 'active' : ''}`} onClick={() => onSelect(label)} aria-current={activeSection === label ? 'page' : undefined}><Icon name={icon}/><span>{label}</span>{label === 'Reports' && <i className="nav-dot"></i>}</button>)}</nav>
    <div className="sidebar-bottom"><div className="data-status"><span></span><div><strong>Systems operational</strong><p>Last synced 9:24 AM</p></div></div><div className="profile"><div className="avatar">KP</div><div><strong>Karma P.</strong><span>Chief Executive Officer</span></div><Icon name="more" size={18}/></div></div>
  </aside>
}

export default Sidebar
