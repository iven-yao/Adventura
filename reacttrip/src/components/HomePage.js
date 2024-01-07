import logo from '../logo.svg';
export default function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                &gt;&gt;&gt;&gt;&gt;Learn React&lt;&lt;&lt;&lt;&lt;
                </a>
                

                <a href="/trip" className="App-link">
                    Trip
                </a>
                <a href="/map" className="App-link">
                    TestMap
                </a>
            </header>
        </div>
    );

}