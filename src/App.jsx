import Background from "./components/background/Background";
import AboutMe from "./components/sections/AboutMe";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import MyTech from "./components/sections/MyTech";

function App() {
    return (
        <div className="bg-[#1D1CE5] relative h-fit flex flex-col">
            <Header />
            <main className="h-fit">
                <Background />
                <div className="max-w-7xl mx-auto absolute inset-0">
                    <div className="flex flex-col items-center z-10">
                        <AboutMe />
                        <MyTech />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
