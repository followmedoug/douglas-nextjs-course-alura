import React from 'react';

const LinkEstilizado = React.forwardRef(({onClick, children, href, ...props}, ref) => {
    return <a href={href} onClick={onClick} ref={ref} style={{ color: 'red'}} {...props}>{children}</a>
})

export default LinkEstilizado