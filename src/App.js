import Button from "./components/Button";
import { GoBell, GoBriefcase } from "react-icons/go";

function App() {
    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <div><Button primary rounded outline onClick={handleClick}><GoBell />Click me!</Button></div>
            <div><Button danger outline onMouseEnter={handleClick} className="mb-10"><GoBriefcase />see me</Button></div>
            <div><Button warning onMouseLeave={handleClick}>hide</Button></div>
            <div><Button secondary outline>show</Button></div>
            <div><Button success rounded>hello</Button></div>
        </div>
    );
}

export default App;