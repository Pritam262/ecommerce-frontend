import Styles from '@/app/style/homeheader.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { GrPrevious, GrNext } from "react-icons/gr";
import FlexOfferCarousel from './FlexOfferCarousel';
export default function Homeother() {

    const firstFlexData = [
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boat.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/boult.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        },
        {
            imageUrl: '/noise.jpg',
            title: 'Up to 79% off Deals of the day',
            desc: "Made for Amazon - Most loved Fashion"
        }
    ]
    return (
        <div className={Styles.container}>
            <div className={Styles.offerContainer}>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Up to 75% off | Headphones</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Up to 75% off | boAt</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boult.jpg" alt="" loading='lazy' />
                                <p>Up to 75% off | boult</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./noise.jpg" alt="" loading='lazy' />
                                <p>Up to 75% off | noise</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./zebronics.jpg" alt="" loading='lazy' />
                                <p>Up to 75% off | zebronics</p>
                            </div>

                        </div>
                    </div>
                    <Link href="/">See all offer</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Up to 60% off | Styles for men</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Clothing</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Footwear</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Watches</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Bags & Wallets</p>
                            </div>

                        </div>
                    </div>
                    <Link href='/'>Mega fashion Days</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Starting $99 | All your home improvement needs</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Spin mops, wipes & more</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Bathroom hardware & accessories</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Hammers, screwdrivers & more</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Extension boards, plugs & more</p>
                            </div>

                        </div>
                    </div>
                    <Link href='/'>Explore all</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Appliances for your home | up to 55% off</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Air conditioners</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Refrigerators</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Microwaves</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Washing machines</p>
                            </div>

                        </div>
                    </div>
                    <Link href='/'>See more</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Revamp your home in style</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Bedsheets, curtains & more</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Home decoration</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Home storage</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Lighting solution</p>
                            </div>

                        </div>
                    </div>
                    <Link href="/">See all offer</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Get the perfact screen size | TVs Starting $6,999</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Budget TVs, Up to 60% off</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>4K TVs | Up to 24 months No cose EMI</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Big Screen | Free installation</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Ultra Premium TVs | Up to 50% off</p>
                            </div>

                        </div>
                    </div>
                    <Link href='/'>See all offers</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Automotive essentials | Up to 60% off</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Cleaning accessories</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Tyre & rim care</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Helmets</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Vacume cleaner</p>
                            </div>

                        </div>
                    </div>
                    <Link href='/'>See all offers</Link>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.cardContainer}>

                        <h3 className={Styles.titleText}>Up to 60% off | Styles for women</h3>
                        <div className={Styles.smallCard}>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Wommen clothing</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Footware + Handbags</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Watches</p>
                            </div>
                            <div className={Styles.smallCardItem}>
                                <img src="./boat.jpg" alt="" loading='lazy' />
                                <p>Fasion jewellery</p>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>Mega Fasions Day</Link>
                </div>
            </div>


            {/* 3rd offer */}

            <FlexOfferCarousel data={firstFlexData}/>


            {/* 4th offer */}
            <FlexOfferCarousel data={firstFlexData}/>

        </div>
    )
}