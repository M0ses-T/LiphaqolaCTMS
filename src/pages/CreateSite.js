import React from "react";
import { Link } from "react-router-dom";


const CreateSite = () => {
    return (
        <createsite className={classes.CreateSite}>
            <div className={classes.createsite__content}>
                <h1>Enter Details of Study Site</h1>

                <form>
                    <input required type = "text" placeholder='username' />
                    <input required type ="password" placeholder='password'/>
                    <input required type = "email" placeholder='email' />
                    <button>Next</button>
                    <button>Save</button>
                </form>
            </div>
        </createsite>
    );
};

export default CreateSite;
