import { GoBell, GoBriefcase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <div><Button primary rounded outline onClick={handleClick}><GoBell />Click me!</Button></div><br/>
            <div><Button danger outline onMouseEnter={handleClick} className="mb-10"><GoBriefcase />see me</Button></div><br/>
            <div><Button warning onMouseLeave={handleClick}>hide</Button></div><br/>
            <div><Button secondary outline>show</Button></div><br/>
            <div><Button success rounded>hello</Button></div><br/>
        </div>
    );
}

export default ButtonPage;