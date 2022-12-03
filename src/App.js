import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
    return (
        <div>
            <Link to="/accordion">Go to Accordion</Link>
            <Link to="/button">Go to Buttton</Link>
            <Route path="/button">
                <ButtonPage></ButtonPage>
            </Route>
            <Route path="/accordion">
                <AccordionPage></AccordionPage>
            </Route>
            <Route path="/dropdown">
                <DropdownPage></DropdownPage>
            </Route>
            
        </div>
    );
}

export default App;