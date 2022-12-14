import PropTypes from 'prop-types';
import classnames from "classnames";

// const finalClassName = classnames('px-3', 'py-1.5', 'bg-blue-500');
// console.log(finalClassName);

// const finalClassName = classnames({
//     'bg-blue-500' : true,
//     'px-3' : false
// });
// console.log(finalClassName);

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const buttonClasses = classnames(rest.className, "flex items-center px-3 py-1.5 border", {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,  // match font color to border color if outlined button
        'text-gray-900': outline && secondary, // the classname that comes later is applied (CSS) `text-gray-900` overrides `text-white`
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    });


    return (
    <button {...rest} className={buttonClasses}>
        {children}
    </button>
    );
}

Button.propTypes = {
    checkButtonType : ({primary, secondary, danger, warning, success }) => {
        // console.log(props);
        const count = Number(!!primary) +  Number(!!secondary) +  Number(!!danger) +  Number(!!warning) +  Number(!!success);
        if(count>1) {
            return new Error('More than one button type selected');
        }
    }
}

export default Button;