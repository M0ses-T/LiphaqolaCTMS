import React from "react";
import classes from "./ParticipantsModules.scss";

const PageOne = () => {
    return (
        <participants className={classes.Participants}>
            <div className={classes.participants__content}>
                <h1>Participants</h1>
                <table>
                    <thead>
                        <th>P ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Study Title</th>
                    </thead>
                    <tbody>
                        <td>001</td>
                        <td>Tatolo</td>
                        <td>Matlali</td>
                        <td>24</td>
                        <td>62050518</td>
                        <td>Well Being</td>
                    </tbody>
                </table>
            </div>
        </participants>
    );
};

export default PageOne;
