import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import './ReviewRow.scss'

const ReviewRow = () => {
  return (
    <div class="review-card">
  <div class="review-header">
    <img src="Images/temp_profile.jpg" alt="User Avatar" />
    <h3>Shubham</h3>
  </div>
  <div class="review-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
  </div>
  <div class="review-footer">
    {/* <span>5 stars</span> */}
    <span>5 &nbsp;<BsStarFill style={{marginTop:'-10%'}}/></span>
    <span>Reviewed on: 14/04/2023</span>
  </div>
</div>
  )
}

export default ReviewRow