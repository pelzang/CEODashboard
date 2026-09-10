import Icon from "./Icon";
import Stat from "./Stat";
import { dailyVolume, profitSeries, revenueMix } from "../data/dashboard";

const profitPoints = profitSeries
  .map((point, index) => `${index * 9.09 + 0.5},${120 - point}`)
  .join(" ");

function Overview({ data, period, onPeriodChange }) {
  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">
            CEO CONTROL CENTRE <span>•</span> DEMONSTRATION DATA
          </p>
          <h1>Good morning, Pelzang</h1>
          <p className="intro">
            A complete view of State Trading Corporation of Bhutan Ltd.
          </p>
        </div>
        <button className="date-select">
          <Icon name="calendar" size={17} /> 18 June 2026{" "}
          <Icon name="chevron" size={15} />
        </button>
      </section>
      <section className="snapshot">
        <div>
          <span className="snapshot-tag">Executive snapshot</span>
          <p>Business performance at a glance</p>
        </div>
        <div className="period-switch">
          <button
            className={period === "Daily" ? "selected" : ""}
            onClick={() => onPeriodChange("Daily")}
          >
            Daily
          </button>
          <button
            className={period === "Weekly" ? "selected" : ""}
            onClick={() => onPeriodChange("Weekly")}
          >
            Weekly
          </button>
        </div>
        <span className="snapshot-detail">{data.detail}</span>
      </section>
      <section className="metrics-grid">
        <Stat
          label="Gross sales"
          value={data.sales}
          change={data.salesChange}
          icon="chart"
        />
        <Stat
          label="Cash on hand"
          value={data.cash}
          change="3.2%"
          tone="navy"
          icon="wallet"
        />
        <Stat
          label="Loan collections"
          value={data.collections}
          change={data.collectionsChange}
          tone="green"
          icon="wallet"
        />
        <Stat
          label="Transactions"
          value={data.orders}
          change="5.1%"
          tone="red"
          icon="report"
        />
      </section>

      <section className="main-grid">
        <article className="panel revenue-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">Finance</p>
              <h2>Profit detail</h2>
              <span>Net profit performance, FY 2025/26</span>
            </div>
            <button className="more-button">
              <Icon name="more" />
            </button>
          </div>
          <div className="profit-summary">
            <div>
              <p>Net profit to date</p>
              <strong>Nu. 94.68M</strong>
            </div>
            <span className="change">
              <Icon name="up" size={13} /> 14.6% <small>above target</small>
            </span>
          </div>
          <div className="chart-wrap">
            <div className="y-axis">
              <span>120M</span>
              <span>90M</span>
              <span>60M</span>
              <span>30M</span>
              <span>0</span>
            </div>
            <div className="chart-area">
              <div className="grid-lines">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <svg
                viewBox="0 0 100 120"
                preserveAspectRatio="none"
                className="chart"
              >
                <defs>
                  <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e46d1c" stopOpacity=".3" />
                    <stop offset="100%" stopColor="#e46d1c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points={`0,120 ${profitPoints} 100,120`}
                  fill="url(#profitFill)"
                />
                <polyline
                  points={profitPoints}
                  fill="none"
                  stroke="#d85f14"
                  strokeWidth="1.8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="chart-highlight">
                <b>Nu. 94.68M</b>
                <span>YTD net profit</span>
              </div>
              <div className="month-labels">
                {[
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                ].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className="panel loan-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">Finance</p>
              <h2>TR loan portfolio</h2>
              <span>Trade receivables and repayment status</span>
            </div>
            <button className="more-button">
              <Icon name="more" />
            </button>
          </div>
          <div className="loan-total">
            <strong>Nu. 238.4M</strong>
            <span>Outstanding balance</span>
          </div>
          <div className="loan-breakdown">
            <div>
              <span className="loan-swatch current"></span>
              <div>
                <strong>Current</strong>
                <p>Nu. 187.2M</p>
              </div>
              <b>78.5%</b>
            </div>
            <div>
              <span className="loan-swatch due"></span>
              <div>
                <strong>Due in 30 days</strong>
                <p>Nu. 36.6M</p>
              </div>
              <b>15.4%</b>
            </div>
            <div>
              <span className="loan-swatch overdue"></span>
              <div>
                <strong>Overdue</strong>
                <p>Nu. 14.6M</p>
              </div>
              <b>6.1%</b>
            </div>
          </div>
          <div className="loan-progress">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <button className="panel-link">
            Open loan report <Icon name="arrow" size={15} />
          </button>
        </article>
      </section>

      <section className="analytics-grid">
        <article className="panel volume-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">Sales activity</p>
              <h2>Transaction volume</h2>
              <span>Daily completed transactions</span>
            </div>
            <span className="trend-badge">
              <Icon name="up" size={12} /> 9.4%
            </span>
          </div>
          <div className="bar-chart">
            {dailyVolume.map(({ day, value }) => (
              <div className="bar-column" key={day}>
                <span>{value}</span>
                <i>
                  <b style={{ height: `${value}%` }}></b>
                </i>
                <small>{day}</small>
              </div>
            ))}
          </div>
        </article>
        <article className="panel mix-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">Commercial</p>
              <h2>Revenue mix</h2>
              <span>Contribution by business unit</span>
            </div>
            <button className="more-button">
              <Icon name="more" />
            </button>
          </div>
          <div className="mix-content">
            <div className="donut-chart">
              <div>
                <strong>Nu. 68.9M</strong>
                <span>Week to date</span>
              </div>
            </div>
            <div className="mix-key">
              {revenueMix.map(({ label, value, tone }) => (
                <span key={label}>
                  <i className={tone}></i>
                  <b>{label}</b>
                  <em>{value}</em>
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="lower-grid">
        <article className="panel inventory-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">Operations</p>
              <h2>Inventory watchlist</h2>
              <span>Stock position across key business units</span>
            </div>
            <button className="panel-link compact">
              Full inventory <Icon name="arrow" size={14} />
            </button>
          </div>
          <div className="inventory-list">
            <div className="inventory-row">
              <span className="asset-icon fuel">BP</span>
              <div>
                <strong>Bhutan Petroleum</strong>
                <p>Fuel & lubricants</p>
              </div>
              <div className="stock">
                <b>18.4 days</b>
                <span>Stock cover</span>
              </div>
              <span className="stock-tag healthy">Healthy</span>
            </div>
            <div className="inventory-row">
              <span className="asset-icon auto">T</span>
              <div>
                <strong>Automotive division</strong>
                <p>Toyota, Tata & Eicher</p>
              </div>
              <div className="stock">
                <b>31 units</b>
                <span>Below reorder point</span>
              </div>
              <span className="stock-tag attention">Attention</span>
            </div>
            <div className="inventory-row">
              <span className="asset-icon home">H</span>
              <div>
                <strong>Homestore & ICT</strong>
                <p>Consumer goods</p>
              </div>
              <div className="stock">
                <b>92.8%</b>
                <span>Inventory accuracy</span>
              </div>
              <span className="stock-tag healthy">Healthy</span>
            </div>
          </div>
        </article>
        <article className="panel people-panel">
          <div className="panel-heading">
            <div>
              <p className="overline">People & culture</p>
              <h2>Employee details</h2>
              <span>Headcount by gender and level</span>
            </div>
            <button className="more-button">
              <Icon name="more" />
            </button>
          </div>
          <div className="people-summary">
            <div className="employee-count">
              <strong>614</strong>
              <span>Total employees</span>
            </div>
            <div className="gender-key">
              <span>
                <i className="men"></i> 382 Male <b>62%</b>
              </span>
              <span>
                <i className="women"></i> 232 Female <b>38%</b>
              </span>
            </div>
          </div>
          <div className="level-bars">
            <div>
              <span>Executive & management</span>
              <i>
                <b style={{ width: "18%" }}></b>
              </i>
              <strong>42</strong>
            </div>
            <div>
              <span>Officers & professionals</span>
              <i>
                <b style={{ width: "57%" }}></b>
              </i>
              <strong>348</strong>
            </div>
            <div>
              <span>Support & operations</span>
              <i>
                <b style={{ width: "45%" }}></b>
              </i>
              <strong>224</strong>
            </div>
          </div>
          <button className="panel-link">
            View HR analytics <Icon name="arrow" size={15} />
          </button>
        </article>
      </section>
    </>
  );
}

export default Overview;
