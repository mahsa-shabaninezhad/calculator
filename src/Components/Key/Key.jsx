import React from 'react'
import PropTypes from 'prop-types'
import './Key.scss'

const Key = ({role='num', content, onClick}) => {
    const className = role === 'operator'? 'btn operator' : 'btn'
    return (
        <button className={className} onClick={() => onClick(role, content)}>
            {content}
        </button>
    )
}

Key.propTypes = {
    content: PropTypes.string,
    role: PropTypes.PropTypes.oneOf(['operator', 'num']),
    onClick: PropTypes.func
}

export default Key
