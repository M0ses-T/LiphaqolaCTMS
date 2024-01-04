import React from "react";
import classes from "./ParticipantsModules.scss";

const PageThree = () => {
    return (
        <participants className={classes.Participants}>
            <div className={classes.participants__content}>
                <h1>Drugs</h1>
                <table>
                    <thead>
                        <th>Drug ID</th>
                        <th>Name</th>
                        <th>Dosage</th>
                        <th>Study ID</th>
                    </thead>
                    <tbody>
                        <td>001</td>
                        <td>Tatolo</td>
                        <td>Matlali</td>
                        <td>24</td>
                    </tbody>
                </table>
            </div>
        </participants>
    );
};

export default PageThree;
