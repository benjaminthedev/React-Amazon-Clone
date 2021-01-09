import React from 'react'
import "./Home.css"
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828641_.jpg"
                alt="Amazon Landing Page"
            />
            <div className="home__row">
                <Product
                    id='098765'
                    title='This is a title'
                    price={9.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg"

                />
                <Product
                    id='098765'
                    title='This is a title'
                    price={9.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg"

                />
            </div>

            <div className="home__row">
                <Product
                    id='098765'
                    title='This is a title'
                    price={9.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg"

                />
                <Product
                    id='098765'
                    title='This is a title'
                    price={9.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg"

                />
                <Product
                    id='098765'
                    title='This is a title'
                    price={9.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg"

                />
            </div>

            <div className="home__row">
                <Product
                    id='098765'
                    title='This is a title'
                    price={9.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/5179mAwVxBL._AC_SX679_.jpg"

                />
            </div>
        </div>
    )
}

export default Home
