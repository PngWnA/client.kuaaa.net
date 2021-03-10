import React, {useEffect} from "react"
import {useDispatch} from "react-redux";
import {currentPage} from "../modules/page";

function About() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentPage({
            currentPage: 'about',
            headerMenuItemKey: '2',
            sideBarMenuItemKey: '1'
        }));
    }, [dispatch]);
    return (
        <div>
            Made by KUAAA Telecom.
        </div>
    );
}

export default About;