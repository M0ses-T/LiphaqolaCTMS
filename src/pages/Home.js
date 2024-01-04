import React from "react";
import classes from "./Home.module.scss";


const Home = () => {
    return (
        <home className={classes.home}>
            <div className={classes.home__content}>
                <h1>Welcome to LIPHAQOLA CTMS</h1> 

                <ul>
                        <li>
                            <a href="/page-one">
                                Show enrolled participants
                            </a>
                        </li>
                        <li>
                            <a href="/page-two">
                                Show ongoing studies
                            </a>
                        </li>
                        <li>
                            <a href="/page-three">
                                Show drugs under study
                            </a>
                        </li>
                        <li>
                            <a href="/page-three">
                                Show studies by location
                            </a>
                        </li>
                    </ul>
            </div>
        </home>            
    );
};

export default Home;
