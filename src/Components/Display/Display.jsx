import React from 'react'
import PropTypes from 'prop-types'
import './Display.scss'

const Display = ({text}) => {
    return (
        <div className="display">
            {text}
        </div>
    )
}

Display.propTypes = {
    text: PropTypes.string
}

export default Display
