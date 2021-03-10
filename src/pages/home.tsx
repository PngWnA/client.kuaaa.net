import React, {useEffect} from "react"
import {useDispatch} from "react-redux";
import {currentPage} from "../modules/page";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentPage({
            currentPage: 'home',
            headerMenuItemKey: '1',
            sideBarMenuItemKey: '1'
        }));
    }, [dispatch]);

    return (
        <div>
            Make KUAAA Great Again!
        </div>
    );
}

export default Home;