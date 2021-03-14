import React from 'react'
import PropTypes from 'prop-types';

const Rating = ( { value, color }) => {
    return (
        <div className='rating'>
            <span style={{margin: '0.1rem'}}>
                <i style={{color}}
                    className={
                    value >= 1 ? 'fas fa-star fa-xs' : 
                    value >= 0.5 ? 'fas fa-star-half-alt fa-xs' :
                        'far fa-star fa-xs'}>
                </i>
            </span>

            <span style={{margin: '0.1rem'}}>
                <i style={{color}}
                    className={
                    value >= 2 ? 'fas fa-star fa-xs' : 
                    value >= 1.5 ? 'fas fa-star-half-alt fa-xs' :
                        'far fa-star fa-xs'}>
                </i>
            </span>

            <span style={{margin: '0.1rem'}}>
                <i style={{color}}
                    className={
                    value >= 3 ? 'fas fa-star fa-xs' : 
                    value >= 2.5 ? 'fas fa-star-half-alt fa-xs' :
                        'far fa-star fa-xs'}>
                </i>
            </span>

            <span style={{margin: '0.1rem'}}>
                <i style={{color}}
                    className={
                    value >= 4 ? 'fas fa-star fa-xs' : 
                    value >= 3.5 ? 'fas fa-star-half-alt fa-xs' :
                        'far fa-star fa-xs'}>
                </i>
            </span>

            <span style={{margin: '0.1rem'}}>
                <i style={{color}}
                    className={
                    value >= 5 ? 'fas fa-star fa-xs' : 
                    value >= 4.5 ? 'fas fa-star-half-alt fa-xs' :
                        'far fa-star fa-xs'}>
                </i>
            </span>
        </div>
    )
}

// Default prop for component and type
Rating.defaultProps = {
    color: '#F8E825'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    color: PropTypes.string,
}

export default Rating