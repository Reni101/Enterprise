import {Count} from "@/components/count/count";
import Arrow from "@/common/assets/icons/arrow";
import background from '@/common/assets/images/Background.png'


const Main = () => {


    return (
        <div>
            <Arrow/>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <img src={background} alt="asd"/>

            <Count/>
        </div>
    );
};

export default Main;