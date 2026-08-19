import Icon from './Icon'

function Stat({ label, value, change, tone = 'gold', icon }) {
  return <article className="stat-card"><div className="stat-top"><span className={`stat-icon ${tone}`}><Icon name={icon} size={17}/></span><span className="stat-label">{label}</span></div><strong>{value}</strong>{change && <span className={`change ${change.startsWith('-') ? 'negative' : ''}`}><Icon name={change.startsWith('-') ? 'down' : 'up'} size={13}/>{change.replace('-', '')} <small>vs. prior period</small></span>}</article>
}

export default Stat
