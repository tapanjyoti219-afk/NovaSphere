import { useState } from 'react'
import type { FormEvent } from 'react'

type Tab = 'home' | 'jobs' | 'scholarships' | 'saved' | 'account'

const NAV_ITEMS: { id: Tab; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'jobs', label: 'Jobs', icon: '💼' },
  { id: 'scholarships', label: 'Scholarships', icon: '🎓' },
  { id: 'saved', label: 'Saved', icon: '🔖' },
  { id: 'account', label: 'Account', icon: '👤' },
]

const TAB_TITLES: Record<Exclude<Tab, 'home'>, string> = {
  jobs: 'Jobs',
  scholarships: 'Scholarships',
  saved: 'Saved Opportunities',
  account: 'Your Account',
}

function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="empty" role="status">
      <span className="empty__icon" aria-hidden="true">📭</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function SourceLabels() {
  return (
    <ul className="labels" aria-label="Verification details">
      <li className="label label--source">Official source: not connected</li>
      <li className="label label--verified">Last verified: —</li>
    </ul>
  )
}

export default function App() {
  const [tab, setTab] = useState<Tab>('home')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [region, setRegion] = useState('assam')
  const [searched, setSearched] = useState(false)

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearched(true)
  }

  function goTo(next: Tab) {
    setTab(next)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="header">
        <div className="container header__inner">
          <button className="brand" onClick={() => goTo('home')} aria-label="NovaSphere home">
            <span className="brand__logo" aria-hidden="true">N</span>
            <span className="brand__text">
              <strong>NovaSphere</strong>
              <small>Jobs &amp; Scholarships</small>
            </span>
          </button>
          <button className="btn btn--ghost" onClick={() => goTo('account')}>
            Sign in
          </button>
        </div>
      </header>

      <main id="main">
        {tab === 'home' ? (
          <>
            {/* Hero */}
            <section className="hero">
              <div className="container">
                <p className="hero__eyebrow">Assam &amp; All India</p>
                <h1>
                  Your Future. <span className="hero__accent">Your Opportunity.</span>
                </h1>
                <p className="hero__sub">
                  Find jobs and scholarships from official sources, all in one place.
                </p>

                <form className="search" onSubmit={handleSearch} role="search">
                  <label className="sr-only" htmlFor="q">Search opportunities</label>
                  <input
                    id="q"
                    type="search"
                    placeholder="Search jobs or scholarships"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <div className="search__row">
                    <label className="sr-only" htmlFor="cat">Category</label>
                    <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)}>
                      <option value="all">Jobs &amp; Scholarships</option>
                      <option value="jobs">Jobs only</option>
                      <option value="scholarships">Scholarships only</option>
                    </select>
                    <label className="sr-only" htmlFor="reg">Region</label>
                    <select id="reg" value={region} onChange={(e) => setRegion(e.target.value)}>
                      <option value="assam">Assam</option>
                      <option value="india">All India</option>
                    </select>
                  </div>
                  <button className="btn btn--primary btn--block" type="submit">
                    Search
                  </button>
                </form>

                {searched && (
                  <p className="search__note" role="status">
                    Live data is not connected yet, so there are no results to show
                    {query ? ` for “${query}”` : ''}.
                  </p>
                )}
              </div>
            </section>

            {/* Category cards */}
            <section className="section container" aria-labelledby="browse-title">
              <h2 id="browse-title">Browse by category</h2>
              <div className="grid grid--2">
                <article className="card card--jobs">
                  <span className="card__icon" aria-hidden="true">💼</span>
                  <h3>Jobs</h3>
                  <p>Government and private job openings, for Assam and across India.</p>
                  <button className="btn btn--primary" onClick={() => goTo('jobs')}>
                    Explore Jobs
                  </button>
                </article>
                <article className="card card--scholarships">
                  <span className="card__icon" aria-hidden="true">🎓</span>
                  <h3>Scholarships</h3>
                  <p>Scholarships and financial support for students at every level.</p>
                  <button className="btn btn--accent" onClick={() => goTo('scholarships')}>
                    Explore Scholarships
                  </button>
                </article>
              </div>
            </section>

            {/* Latest */}
            <section className="section container" aria-labelledby="latest-title">
              <div className="section__head">
                <h2 id="latest-title">Latest Opportunities</h2>
              </div>
              <EmptyState
                title="No opportunities to show yet"
                text="Real job and scholarship data is not connected. Verified listings will appear here once it is."
              />
            </section>

            {/* Recommended */}
            <section className="section container" aria-labelledby="rec-title">
              <div className="section__head">
                <h2 id="rec-title">Recommended for You</h2>
              </div>
              <EmptyState
                title="No recommendations yet"
                text="Once data is connected, you will see opportunities that match your interests here."
              />
            </section>

            {/* Trust */}
            <section className="section container" aria-labelledby="trust-title">
              <div className="trust">
                <h2 id="trust-title">Every listing will show where it came from</h2>
                <p>
                  Each opportunity will carry these two labels, so you always know the
                  source and how recent the information is.
                </p>
                <SourceLabels />
              </div>
            </section>
          </>
        ) : (
          <section className="section container page">
            <h1 className="page__title">{TAB_TITLES[tab]}</h1>
            <EmptyState
              title="Nothing here yet"
              text="Real data is not connected yet. This page will be ready soon."
            />
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong className="footer__brand">NovaSphere</strong>
            <p>Your Future. Your Opportunity.</p>
          </div>
          <p className="footer__note">
            Always confirm details on the official website before applying.
          </p>
          <p className="footer__founder">Founded by Tapan Jyoti</p>
          <p className="footer__copy">© {new Date().getFullYear()} NovaSphere. All rights reserved.</p>
        </div>
      </footer>

      <nav className="bottom-nav" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`bottom-nav__item${tab === item.id ? ' is-active' : ''}`}
            aria-current={tab === item.id ? 'page' : undefined}
            onClick={() => goTo(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
