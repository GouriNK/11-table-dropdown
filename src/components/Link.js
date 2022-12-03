import classnames from 'classnames';
import useNavigation from "../hooks/use-navigation";

function Link({to, children}) {
    const {navigate} = useNavigation();

    const classes = classnames('text-blue-500');

    const handleClick = (event)=> {
        // allow cmd*click on link to open new url
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;