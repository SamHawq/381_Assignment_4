import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import reviewsData from '../data/review';

function HomeMainSection() {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        const selectRandomReviews = () => {
            const copyArray = [...reviewsData]; 
            const randomIndex1 = Math.floor(Math.random() * copyArray.length);
            const randomElement1 = copyArray[randomIndex1]; 
            copyArray.splice(randomIndex1, 1); 
            const randomIndex2 = Math.floor(Math.random() * copyArray.length);
            const randomElement2 = copyArray[randomIndex2]; 
            const selectedReviews = [randomElement1, randomElement2];
            setReviews(selectedReviews);
        };
        selectRandomReviews();
    }, []);

    function handleShopNow(){
        navigate("/products");
    }

    let reviewContent = null;

    if (reviews.length > 0) {
        reviewContent = (
            <>
                <p>{reviews[0].customerName}</p>
                <p>{reviews[0].reviewContent}</p>
                <p>Rating: {Array(reviews[0].stars).fill('\u2605').join('')}</p>

                <p>{reviews[1].customerName}</p>
                <p>{reviews[1].reviewContent}</p>
                <p>Rating: {Array(reviews[1].stars).fill('\u2605').join('')}</p>
            </>
        );
    }

    return (
        <div className="home-main-section">

        <section className='About-us'>
            <h2>About Us</h2>
            <p>Welcome to out online store! We are passionate about provided high-quality products 
                and exceptional customer service. Learn more about our story and commitment to your 
                satisfaction
            </p>
            <button onClick={handleShopNow}>Shop Now!</button>
        </section>

        <h2> Customer Reviews </h2>
        
        {reviewContent}

        </div>
    );
}

export default HomeMainSection;

