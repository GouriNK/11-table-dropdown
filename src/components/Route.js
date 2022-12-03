import useNavigation from "../hooks/use-navigation";


function Route({path, children}) {
    const {currPath} = useNavigation();

    if(path === currPath){
        return children;
    }

    return null;
}

export default Route;