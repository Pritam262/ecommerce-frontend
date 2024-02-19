"use client"
import React, { useState, useEffect, useRef } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Styles from '@/app/style/homeheader.module.css'; 

const Carousel = () => {
    const [itemsToShow, setItemsToShow] = useState(3); // Initial number of items to show
    const [scrollPosition, setScrollPosition] = useState(0);

    // Function to handle next button click
    // const trYcontainer = useRef<HTMLDivElement>()
    const container = useRef<HTMLDivElement>(null);

    const prevBtn = useRef<HTMLDivElement>(null);
    const nextBtn = useRef<HTMLDivElement>(null);

    
    const handleNext = () => {
        // const container = document.querySelector(`.${Styles.itemContainer}`);
        // console.log((container.current?.scrollLeft) - 350);
        if (container.current) {
            container.current.scrollLeft += container.current.offsetWidth;
            setScrollPosition(container.current.scrollLeft);
        }

        // nextBtn.addEventListener('hover', console.log("PrevBtn hover"));
    };

    // Function to handle previous button click
    const handlePrevious = () => {
        // const container = document.querySelector(`.${Styles.itemContainer}`);
        if (container.current) {
            container.current.scrollLeft -= container.current.offsetWidth;
            setScrollPosition(container.current.scrollLeft);
        }
    };

    useEffect(() => {
        // Update number of items to show based on screen width
        const updateItemsToShow = () => {
            const screenWidth = window.innerWidth;
            const newItemsToShow = screenWidth > 600 ? 6 : 3;
            setItemsToShow(newItemsToShow);
        };

        updateItemsToShow();

        // Update number of items to show when window is resized
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    return (
        <div className={Styles.flexOffer}>
            <p>Today&apos;s Deals See all deals</p>
            <div className={Styles.prevDiv} onClick={handlePrevious}>
                <GrPrevious />
            </div>
            <div className={Styles.itemContainer} ref={container}>
                {Array.from({ length: 19 }).map((_, index) => (
                    <div key={index} className={Styles.itemCard}>
                        <img src="/boat.jpg" width={150} height={150} alt='' loading='lazy' />
                        <p>Up to 79% off Deals of the day Made for Amazon - Most loved Fashion {index + 1}</p>
                    </div>
                ))}
            </div>
            <div className={Styles.nextDiv} onClick={handleNext}>
                <GrNext  />
            </div>
        </div>
    );
};

export default Carousel;
