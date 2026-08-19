import Icon from './Icon'
import Stat from './Stat'
import { sectionPages } from '../data/dashboard'

function Workspace({ section }) {
  const page = sectionPages[section]
  return <section className="workspace-page">
    <section className="welcome-row"><div><p className="eyebrow">{page.eyebrow.toUpperCase()} <span>•</span> STCBL</p><h1>{section}</h1><p className="intro">{page.intro}</p></div><button className="date-select"><Icon name="calendar" size={17}/> 18 June 2026 <Icon name="chevron" size={15}/></button></section>
    <section className="snapshot"><div><span className="snapshot-tag">{section} snapshot</span><p>Latest information from the executive workspace</p></div><span className="snapshot-detail">Updated today at 9:24 AM</span></section>
    <section className="metrics-grid">{page.stats.map(([label, value], index) => <Stat key={label} label={label} value={value} change={index % 2 ? '3.2%' : '8.6%'} tone={['gold', 'navy', 'green', 'red'][index]} icon={['chart', 'wallet', 'report', 'dashboard'][index]}/>)}</section>
    <section className="workspace-grid"><article className="panel workspace-panel"><div className="panel-heading"><div><p className="overline">Priority activity</p><h2>Items requiring attention</h2><span>Current updates for {section.toLowerCase()}</span></div><button className="more-button"><Icon name="more"/></button></div><div className="activity-list">{page.items.map(([title, detail], index) => <div className="activity-row" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{detail}</p></div><button className="panel-link">Review <Icon name="arrow" size={15}/></button></div>)}</div></article><article className="panel workspace-panel quick-panel"><div className="panel-heading"><div><p className="overline">Quick access</p><h2>Workspace actions</h2><span>Frequently used tools and documents</span></div></div><div className="quick-links"><button><Icon name="report" size={18}/><span>Open latest report</span><Icon name="chevron" size={15}/></button><button><Icon name="users" size={18}/><span>View assigned tasks</span><Icon name="chevron" size={15}/></button><button><Icon name="settings" size={18}/><span>Manage preferences</span><Icon name="chevron" size={15}/></button></div></article></section>
  </section>
}

export default Workspace
