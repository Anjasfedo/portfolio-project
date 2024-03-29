import Background from "./components/background/Background";
import AboutMe from "./components/sections/AboutMe";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import MySkills from "./components/sections/MySkills";

function App() {
    return (
        <div className="relative h-fit flex flex-col">
            <Header />
            <main className="">
                <div className="relative">
                    <Background />
                    <div className="flex flex-col items-center z-10">
                        <AboutMe />
                        <MySkills />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
