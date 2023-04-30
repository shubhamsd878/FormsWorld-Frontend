import React, { useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
import './ReviewRow.scss'

const ReviewRow = ({ name, avatar, review, rating, date }) => {
  return (
    <div class="review-card">
      <div class="review-header">
        <img src={avatar} alt="User Avatar" />
        <h3>{name}</h3>
      </div>
      <div class="review-body">
        <p>{review}</p>
      </div>
      <div class="review-footer">
        {/* <span>5 stars</span> */}
        <span>{rating} &nbsp;<BsStarFill style={{ marginTop: '-10%' }} /></span>
        <span>Reviewed on: {date}</span>
      </div>
    </div>
  )
}

export default ReviewRow