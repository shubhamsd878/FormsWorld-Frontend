import React, { useEffect, useState } from 'react'
import './SocialReview.scss'
import ReviewRow from './ReviewRow/ReviewRow'
import DB1 from './db/db1.json'
import DB2 from './db/db2.json'

const SocialReviews = () => {

    return (
        <div class="">
            <marquee behavior='scroll' loop='-1' >
                <div className='d-flex'>
                {DB1.map(item => (
                    <ReviewRow key={item.avatar} name={item.name} avatar={item.avatar} review={item.review} rating={item.rating} date={item.date} />
                ))}
        </div>
            </marquee >

    <marquee direction='right' behavior='scroll' loop='-1' >
        <div className='d-flex '>
        {DB2.map(item => (
            <ReviewRow key={item.avatar} name={item.name} avatar={item.avatar} review={item.review} rating={item.rating} date={item.date} />
        ))}
        </div>
    </marquee>
        </div >


    )
}

export default SocialReviews