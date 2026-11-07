function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>✦ NovaSphere</h2>
        <span>Your Future. Your Opportunity.</span>
      </header>

      <main>
        <section className="hero">
          <p className="tag">ASSAM + ALL INDIA</p>
          <h1>Find Your Next Opportunity</h1>
          <p>
            Discover jobs and scholarships that bring
            you closer to your future.
          </p>
          <div className="search">
            <input
              type="search"
              placeholder="Search jobs or scholarships..."
            />
            <button>Search</button>
          </div>
        </section>

        <section className="categories">
          <h2>Explore Opportunities</h2>
          <div className="cards">
            <article className="card">
              <span>💼</span>
              <h3>Find Jobs</h3>
              <p>Government, Private, Police, Railway and more.</p>
              <button>Explore Jobs →</button>
            </article>

            <article className="card">
              <span>🎓</span>
              <h3>Find Scholarships</h3>
              <p>Discover scholarships for your education.</p>
              <button>Explore Scholarships →</button>
            </article>
          </div>
        </section>

        <section className="latest">
          <h2>Latest Opportunities</h2>
          <p>New verified opportunities will appear here.</p>
        </section>
      </main>

      <footer>
        <h3>NovaSphere</h3>
        <p>Founded by Tapan Jyoti</p>
        <p>© 2026 NovaSphere. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
