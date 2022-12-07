import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {

    // this ensures, that wehnt he modal is shown, scrolling is not allowed and when it's gone, scrolling is allowed.
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    // position fixed ensures that modal is shown even if it is at the bottom of the page
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;