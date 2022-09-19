import React from 'react'
import Products from './Products';
import "./home.css";

const Home = () => {
    return (
        <div className=''>
            <div className='hero'>
                <div className="card text-bg-dark text-white border-0">
                    <img src="/assests/bg.jpg" className="card-img" alt="backgrount" height="550px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">

                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">
                                CHECK OUT ALL THE TRENDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;