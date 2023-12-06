
import background from '../../shared/assets/images/Background.png'
import Arrow from "@/shared/assets/icons/arrow";


const Main = () => {


    return (
        <div>
            <Arrow/>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <img src={background} alt="asd"/>

        </div>
    );
};

export default Main;