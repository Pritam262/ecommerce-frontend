import Styles from '@/app/style/homeheader.module.css';
export default function Homeother() {
    return (
        <div className={Styles.container}>
            <div className={Styles.offerContainer}>
                <div className={Styles.card}>
                    <h2>Up to 75% off | Headphones</h2>
                    <div className={Styles.minCard}>
                        <div className={Styles.cardItem}>

                            <p>Up to 75% off| boAt</p>
                        </div>
                        <div className={Styles.cardItem}>

                            <p>Up to 75% off| boAt</p>
                        </div>

                        <div className={Styles.cardItem}>

                            <p>Up to 75% off| boAt</p>
                        </div>
                        <div className={Styles.cardItem}>

                            <p>Up to 75% off| boAt</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.card}></div>
                <div className={Styles.card}></div>
                <div className={Styles.card}></div>
            </div>
            {/* 2nd offer */}
            <div className={Styles.offerContainer} style={{ marginTop: '10px' }}>
                <div className={Styles.card}></div>
                <div className={Styles.card}></div>
                <div className={Styles.card}></div>
                <div className={Styles.card}></div>
            </div>

            {/* 3rd offer */}
            <div className={Styles.flexOffer} style={{ marginTop: '10px' }}></div>
            {/* 4th offer */}
            <div className={Styles.flexOffer} style={{ marginTop: '10px' }}></div>
        </div>
    )
}