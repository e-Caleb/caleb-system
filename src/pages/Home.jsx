import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import StatusPanel from '../components/StatusPanel'
import Projects from '../components/Projects'
import Logs from '../components/Logs'
import QuickAccess from '../components/QuickAccess'

function Home() {
    return (
        <div className="app-shell">
            <Sidebar />

            <main className="main-content">
                <section className="top-grid">
                    <Hero />
                    <StatusPanel />
                </section>

                <Projects />

                <section className="bottom-grid">
                    <Logs />
                    <QuickAccess />
                </section>
            </main>
        </div>
    )
}

export default Home