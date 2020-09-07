import React from 'react'
import Product from './Product.js';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                alt="Top Banner"
            />

            {/* Products */}
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12345678"
                    title="Minecraft for Nintendo Switch"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY606_.jpg"
                />
                <Product
                    id="12345678"
                    title="Minecraft for Nintendo Switch"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY606_.jpg"
                />
                <Product
                    id="12345678"
                    title="Minecraft for Nintendo Switch"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY606_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12345678"
                    title="Minecraft for Nintendo Switch"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY606_.jpg"
                />
                <Product
                    id="12345678"
                    title="Minecraft for Nintendo Switch"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY606_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12345678"
                    title="Minecraft for Nintendo Switch"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY606_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
