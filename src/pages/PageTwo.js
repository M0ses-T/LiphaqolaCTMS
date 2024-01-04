import React from "react";
import classes from "./ParticipantsModules.scss";

const PageTwo = () => {
    return (
        <participants className={classes.Participants}>
            <div className={classes.participants__content}>
                <h1>Studies</h1>
                <table>
                    <thead>
                        <th>Study ID</th>
                        <th>Title</th>
                        <th>Sponsor</th>
                        <th>Assigned Investigator</th>
                        <th>Objectives</th>
                        <th>Study SITE</th>
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

export default PageTwo;
