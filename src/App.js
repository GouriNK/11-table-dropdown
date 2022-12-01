import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";

function App() {
    const items = [
        {
            id: 1,
            label : "Can I use React on a project?",
            content : "You can use whatever you like for any project that you like. How long is the porject?"
        },
        {   id: 2,
            label : "Can I use CSS on a project?",
            content : "You can use whatever you like for any project that you like. How long is the porject?"
        },
        {
            id: 3,
            label : "Can I use JS on a project?",
            content : "You can use whatever you like for any project that you like. How long is the porject?"
        }
    ]
    return (
        <div>
            <ButtonPage></ButtonPage>
            <Accordion items={items}></Accordion>
        </div>
    );
}

export default App;