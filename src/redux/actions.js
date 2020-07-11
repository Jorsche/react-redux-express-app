export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";


// action creator
export const toggleNavBar = navBarString=>(dispatch)=>{
    dispatch({
        type: TOGGLE_NAVBAR, navBarString
    });
    };

