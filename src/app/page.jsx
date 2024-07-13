import Header from "./components/Header/Header";


export default function Home() {
    return (
        <main>
            <div className="home">
                <Header />
                
                <div className="shell">
                    <div className="home__inner">

                        <h1>
                            Валидатор
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    );
}
