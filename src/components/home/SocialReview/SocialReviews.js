import React from 'react'
import './SocialReview.scss'
import ReviewRow from './ReviewRow/ReviewRow'

const SocialReviews = () => {
    return (
        <div class="">
            {/* <marquee behavior='scroll'> */}
            <marquee behavior='scroll' loop='-1' onMouseOver={"this.stop();"}>
                <ReviewRow />
                <ReviewRow />
                <ReviewRow />
                
                <ReviewRow />
                <ReviewRow />
                <ReviewRow />

                <ReviewRow />
                <ReviewRow />
                <ReviewRow />
            </marquee>

            <marquee direction='right' behavior='scroll' loop='-1' onhover="stop()">
                <ReviewRow />
                <ReviewRow />
                <ReviewRow />
                
                <ReviewRow />
                <ReviewRow />
                <ReviewRow />

                <ReviewRow />
                <ReviewRow />
                <ReviewRow />
            </marquee>
        </div>


    )
}

export default SocialReviews