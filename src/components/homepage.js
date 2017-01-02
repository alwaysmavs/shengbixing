import React, {Component} from 'react';
import {render} from 'react-dom';
import Nav from './nav';
import Footer from './footer'
import { HOMEPAGE_DATA } from '../staticData/homepageLogo';

class Homepage extends Component {


    render() {

        let homepageData = HOMEPAGE_DATA;
        let homepageDataList = homepageData.map(
            function (data) {
                return(
                    <div className="homepage-logo-list" key={data.homepageId}>
                        <img src={data.homepageLogo} />
                    </div>
                )
            }
        );

        return (
            <div>
                <Nav/>
                <div className="homepage-part1-box">
                    <div className="homepage-part1-midbox">
                        <div className="homepage-inner-left">Intro</div>
                        <div className="homepage-inner-mid">
                            <div>Portfolio Of Cellier.</div>
                            <div>I’m a self-taught  product designer who's been crafting websites & apps since 2015. Now, I design products, user experience, interactions and brands. </div>
                        </div>
                        <div className="homepage-inner-right">
                            <div>Resume</div>
                            <div>Recent Works</div>
                        </div>
                    </div>
                </div>
                <div className="homepage-part2-box">
                    <img src="http://oj51kbaw5.bkt.clouddn.com/pili-sdk.jpg"/>
                </div>
                <div className="homepage-part3-box">
                    <img src="http://oj51kbaw5.bkt.clouddn.com/ribao.jpg" />
                </div>
                <div className="homepage-part4-box">
                    <img src="http://oj51kbaw5.bkt.clouddn.com/box.png" />
                </div>
                <div className="homepage-part5-box">
                    <div className="homepage-part5-midbox">
                        <div className="homepage-inner-left">Media</div>
                        <div className="homepage-inner-mid">
                            I really like living on the internet,It take me to know about the world far far away from me. You can find me below or search “cellier” in many other social medias.
                        </div>
                        <div className="homepage-inner-right">
                            Phone (86) 185 1210 1357
                        </div>
                    </div>
                </div>

                <div className="homepage-part6-box">
                    {homepageDataList}
                    <div className="float-clear"></div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Homepage;
