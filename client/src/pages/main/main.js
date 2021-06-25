import React, { Component } from 'react';
import './main.scss';

import InfoPanel from './body/info';
import Header from '../../patterns/common/header/header';
import Footer from '../../patterns/common/footer/footer';
import Sliders from './body/scroll-menu';

const slideData = [
    {
        index: 0,
        headline: 'Mechanics',
        button: 'go to menu',
        src: "https://github.com/CGSGAL6/filechange/blob/master/mec.jpg?raw=true"
    },
    {
        index: 1,
        headline: 'Molecular',
        button: 'go to menu',
        src: 'https://github.com/CGSGAL6/filechange/blob/master/mol.jpg?raw=true'
    },
    {
        index: 2,
        headline: 'Electrodynamics',
        button: 'go to menu',
        src: 'https://github.com/CGSGAL6/filechange/blob/master/ele.jpg?raw=true'
    },
    {
        index: 3,
        headline: 'Magnetism',
        button: 'go to menu',
        src: 'https://github.com/CGSGAL6/filechange/blob/master/mag.jpg?raw=true'
    },
    {
        index: 4,
        headline: 'Optics',
        button: 'go to menu',
        src: 'https://github.com/CGSGAL6/filechange/blob/master/opt.jpg?raw=true'
    }

]


class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="footage">
                    <div className="backDiv1"><InfoPanel /></div>
                </div>
                <Sliders heading="Example Slider" slides={slideData} from='' />
                <Footer />
                <Header />
            </div>
        );
    }
}

export default MainPage;