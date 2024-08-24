
import style from "./MainCard.module.css"
function MainCard()
{
    return(
            <div className={style.MainCard}>

                <div className={style.content}>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p className={style.para}>Your feet deserve the best we need the customer and this thing is done by us.</p>
                    <div>
                        <button>show now </button>
                        <button className={style.special}>Catogary</button>
                       
                    </div>
                    <p>Also Avilable on</p>
                    <p className={style.logo}>
                        <img src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png" alt="Not Found" />
                        <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/amazon_logo_icon_147320.png" alt="src" />
                    </p>

                </div>
                <div className={style.content_image}>

                    <img src="https://media.wired.com/photos/5d154dd7c4e1580009f9fe26/master/pass/gear_new-balance-990.jpg" alt="not found" />

                </div>

            </div>
    );
}
export default MainCard;

