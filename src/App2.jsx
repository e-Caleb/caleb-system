import React from 'react'
import "./assets/styles/global2.css"
import profile from "./Data"

function App2() {
    return (
        <main className="terminal-container">
            <section className="terminal-window">
                <div className="terminal-content">
                    <Command
                        command="whoami"
                        output={
                            <>
                                <h1>{profile.name}</h1>
                                <p>{profile.role}</p>
                            </>
                        }
                    />

                    <Command
                        command="cat ./current_status"
                        output={
                            <div className="status-line">
                                <span className="green-bar"></span>
                                <p>
                                    {profile.currentStatus}
                                </p>
                            </div>
                        }
                    />

                    <Command
                        command="open ./projects"
                        output={
                            <a href={profile.projects} className="terminal-link">
                                -&gt; https://wwww.caleb.com/projects
                            </a>
                        }
                    />

                    <Command
                        command="open ./blog"
                        output={
                            <a href={profile.blogLink} target="_blank" className="terminal-link">
                                -&gt; {profile.blogLink}
                            </a>
                        }
                    />

                    <Command
                        command="echo $CONTACT"
                        output={
                            <div className="contact-links">
                                <a href={"mailto:" + profile.contact.email} target="_blank" rel="noopener noreferrer">
                                    Email
                                </a>
                                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                <a href={"/" + profile.contact.twitter} target="_blank" rel="noopener noreferrer">
                                    X (Twitter)
                                </a>
                            </div>
                        }
                    />

                    <div className="prompt">
                        <span className="username">{profile.username}</span>
                        <span className="colon">:~$</span>
                        <span className="cursor"></span>
                    </div>
                </div>
            </section>
        </main>
    );
}

function Command({ command, output }) {
    return (
        <div className="command-block">
            <div className="prompt">
                <span className="username">{profile.username}</span>
                <span className="colon">:~$</span>

                <span className="command">{command}</span>
            </div>

            <div className="output">{output}</div>
        </div>
    );
}

export default App2