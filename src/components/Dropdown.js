import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';


function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const refToDropdown = useRef();
  
  useEffect(()=>{
    // create the function to bind
    const onBodyClick = (event) => {
        if (!refToDropdown.current) {
          return;
        }
        if(!refToDropdown.current.contains(event.target)){
            setIsOpen(false);
        }
    };

    // bind watching function
    document.addEventListener('click', onBodyClick, true);

    // unbind watching function or cleanup. No more watching.
    return () => {
        document.removeEventListener('click', onBodyClick)
    };

  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);
    // WHAT OPTION DID THE USER CLICK ON???
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={refToDropdown} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;