import { useParams } from "react-router";
import Sliders from "../main/body/scroll-menu";

const slideData = [
    {
        index: 0,
        headline: 'Materials',
        button: 'go to menu',
        src: ""
    },
    {
        index: 1,
        headline: 'Models',
        button: 'go to menu',
        src: ''
    },
    {
        index: 2,
        headline: 'Tests',
        button: 'go to menu',
        src: ''
    },

]

export default function Body(props) {
    const { id } = useParams();

    return (
        <div>
            <div><h>{props.theme}</h></div>
            <Sliders heading="a" slides={slideData} page="test" from={id} />
        </div>
    );
}
