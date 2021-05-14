import React from 'react'
import PropTypes from 'prop-types'
import './KeyPad.scss'
import Key from '../Key/Key'

const KeyPad = ({onClick}) => {
    return (
        <div className="key-pad">
            <Key role="operator" content="C" onClick={onClick} />
            <Key role="operator" content="&divide;" onClick={onClick} />
            <Key role="operator" content="&times;" onClick={onClick} />
            <Key role="num" content="7" onClick={onClick} />
            <Key role="num" content="8" onClick={onClick} />
            <Key role="num" content="9" onClick={onClick} />
            <Key role="operator" content="-" onClick={onClick} />
            <Key role="num" content="4" onClick={onClick} />
            <Key role="num" content="5" onClick={onClick} />
            <Key role="num" content="6" onClick={onClick} />
            <Key role="operator" content="+" onClick={onClick} />
            <Key role="num" content="1" onClick={onClick} />
            <Key role="num" content="2" onClick={onClick} />
            <Key role="num" content="3" onClick={onClick} />
            <Key role="num" content="0" onClick={onClick} />
            <Key role="operator" content="=" onClick={onClick} />
            
            
            
        </div>
    )
}

KeyPad.propTypes = {

}

export default KeyPad
