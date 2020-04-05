import React from 'react'

function StudentSearch({ onChangeValue, value }) {
    
    return (
        <input
            onChangeValue={onChangeValue}
            value={value}
            id="search"
            icon="search"
        />
    )
}

export default StudentSearch
