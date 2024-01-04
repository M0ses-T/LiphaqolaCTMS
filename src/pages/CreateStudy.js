import React from "react";
import classes from "./CreateStudy.module.scss";

const CreateStudy = () => {
    return (
        <createstudy className={classes.createstudy}>
            <div className={classes.createstudy__content}>
                <h1>Enter Details of Study</h1>

                <form>
                    <input required type = "studyid" placeholder='study ID' />
                    <input required type ="title" placeholder='title'/>
                    <input required type = "sponsor" placeholder='sponsor' />
                    <input required type = "investigator" placeholder='assined investigator' />
                    <input required type = "objectives" placeholder='objectives' />
                    <input required type = "sitename" placeholder='site name' />
                    <button>Next</button>
                    <button>Save</button>
                </form>
            </div>
        </createstudy>
    );
};

export default CreateStudy;
