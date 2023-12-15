import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
        <div className='Left'>
            <img src={require('../img/footer.png')} alt='png'></img>
            <h2>Melody Music</h2>
        </div>
        <div className='Mid'>
            <p>©2023 All right reserved. <span>Jeevesh Rai</span></p>
        </div>
        <div className='Right'>
        <i className="fa-solid fa-id-card-clip"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        </div>
    </div>
  )
}

export default Footer