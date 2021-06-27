import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./container/Intro/Intro";
import Article from "./container/Article/Article";
import Project from "./container/Project/Project";
// import Extras from "./container/Extras/Extras";
import Accomodations from "./container/Accomodations/Accomodations";
import Cuisine from "./container/Cuisine/Cuisine";
import Garden from "./container/Garden/Garden";
import Experiences from "./container/Experiences/Experiences";
// import Footer from "./components/Footer/Footer";

function App() {
    return (
        <main>
            <Navbar />
            <Intro />
            <Article />
            <Project />
            <Accomodations />
            <Cuisine />
            <Garden />
            <Experiences />
            {/* <Footer /> */}
        </main>
    );
}

export default App;
