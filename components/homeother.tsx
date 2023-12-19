import Styles from '@/app/style/homeheader.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Homeother() {
    return (
        <div className={Styles.container}>
            <div className={Styles.offerContainer}>
                <div className={Styles.card}>
                    <h3>Up to 75% off | Headphones</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Up to 75% off| boAt</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Up to 75% off| boAt</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Up to 75% off| boAt</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Up to 75% off| boAt</p>
                        </div>
                    </div>
                    <Link href='/'>See all offers</Link>
                </div>
                <div className={Styles.card}>
                    <h3>Up to 60% off | Styles for men</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Clothing</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Footwear</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Watches</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Bags & Wallets</p>
                        </div>
                    </div>
                    <Link href='/'>Mega fashion Days</Link>
                </div>
                <div className={Styles.card}>
                    <h3>Starting $99 | All your home improvement needs</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Spin mops, wipes & more</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Bathroom hardware & accessories</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Hammers, screwdrivers & more</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Extension boards, plugs & more</p>
                        </div>
                    </div>
                    <Link href='/'>Explore all</Link>
                </div>
                <div className={Styles.card}>
                    <h3>Appliances for your home | up to 55% off</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Air conditioners</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Refrigerators</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Microwaves</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Washing machines</p>
                        </div>
                    </div>
                    <Link href='/'>See more</Link>
                </div>
            </div>
            {/* 2nd offer */}
            <div className={Styles.offerContainer} style={{ marginTop: '10px' }}>
                <div className={Styles.card}>
                    <h3>Revamp your home in style</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Bedsheets, curtains & more</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Home decoration</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Home storage</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Lighting solution</p>
                        </div>
                    </div>
                    <Link href='/'>See all offers</Link>
                </div>
                <div className={Styles.card}>
                    <h3>Get the perfact screen size | TVs Starting $6,999</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Budget TVs, Up to 60% off</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>4K TVs | Up to 24 months No cose EMI</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Big Screen | Free installation</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Ultra Premium TVs | Up to 50% off</p>
                        </div>
                    </div>
                    <Link href='/'>See all offers</Link>
                </div>
                <div className={Styles.card}>
                    <h3>Automotive essentials | Up to 60% off</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Cleaning accessories</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Tyre & rim care</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Helmets</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Vacume cleaner</p>
                        </div>
                    </div>
                    <Link href='/'>See more</Link>
                </div>
                <div className={Styles.card}>
                    <h3>Up to 60% off | Styles for women</h3>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>
                            <Image src='/boat.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Wommen clothing</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/boult.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Footware + Handbags</p>
                        </div>

                        <div className={Styles.cardItem}>
                            <Image src='/noise.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Watches</p>
                        </div>
                        <div className={Styles.cardItem}>
                            <Image src='/zebronics.jpg' className={Styles.cardItemImage} width={150} height={120} alt='' priority />
                            <p>Fasion jewellery</p>
                        </div>
                    </div>
                    <Link href='/'>Mega Fasions Day</Link>
                </div>
            </div>

            {/* 3rd offer */}
            <div className={Styles.flexOffer} style={{ marginTop: '10px' }}>
                <span style={{ display: 'flex' }}><p>Today's Deals</p> <Link href='/' style={{ marginLeft: "15px" }}>See all deals</Link></span>
                <div className={Styles.flexOfferBox}>
                    {/* Multiple image slide */}

                    {/* Image 1 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 2 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 3 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 4 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 5 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 6 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 7 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 8 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 9 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>

                    {/* Image 10 */}
                    <div className={Styles.flexImage}>
                        <Image src='/boat.jpg' width={100} height={100} alt='' priority />
                        <span><span>Up to 79% off</span><p>Deals of the day</p></span>
                        <p>Made for Amazon - Most loved Fashion</p>
                    </div>
                </div>
            </div>
            {/* 4th offer */}
            <div className={Styles.flexOffer} style={{ marginTop: '10px' }}></div>
        </div>
    )
}