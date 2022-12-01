import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";


function Accordion ({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (selectedIndex) => {
        if(expandedIndex === selectedIndex) {
            setExpandedIndex(-1);
            return;
        } 
        setExpandedIndex(selectedIndex);
    }

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        // JS && gives back the 1st falsy value or the last truthy value. Booleans are not displayed at all. 
        // so here content is returned, if isExpanded is true.
        // if isExpanded is false, isExpanded is returned and nothing is displayed.
        const content = isExpanded && <div>{item.content}</div>

        const icon = (
            <span className="text-2xl">
              {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
            </span>
          );

        return (
            <div key={item.id}>
                <div 
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                    onClick={()=>handleClick(index)}
                >
                        {item.label}
                        {icon}
                    </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    });
    return (
         <div className="border-x border-t rounded">{renderedItems}</div>
    );
}

export default Accordion;