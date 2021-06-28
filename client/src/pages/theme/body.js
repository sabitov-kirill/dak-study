import { useParams } from "react-router";

import Sliders from "../main/body/scroll-menu";
import "./theme.scss"

// import ScrollToTopOnMount from "./../../patterns/common/scroll-top.js"

const slideData = [
    {
        index: 0,
        headline: 'Tests',
        button: 'go to menu',
        src: ''
    },
    {
        index: 1,
        headline: 'Materials',
        button: 'go to menu',
        src: ""
    },
    {
        index: 2,
        headline: 'Models',
        button: 'go to menu',
        src: ''
    }
]

export default function Body(props) {
    let { theme } = useParams();
    let divName = `backgroundDiv ${theme.slice(0, 3)}Body`

    return (
        <div>
            {/* <ScrollToTopOnMount /> */}
            <div>
                <div className={divName}>
                    {/* <div className="asdDiv"><h1 className="themeHeader1">{theme}</h1></div> */}
                    <div className="asdDiv"><p className="themeHeader1">{theme}</p></div>
                    <div className="backDiv"></div>
                </div>
            </div>
            <div>
                <Sliders heading="a" slides={slideData} from={theme} />
            </div>
        </div>
    );
}
