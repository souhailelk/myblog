import React from 'react'
import {
    useLocation,
  } from "react-router-dom";
  
function Page404() {
    let location = useLocation();
  
    return (
      <div>
        <div class="h-screen w-screen  flex justify-center content-center flex-wrap">
          <div class="font-sans  text-6xl">404 Not found</div>
          <div class="font-sans text-center  w-screen text-3xl">No match for <span class="font-black">'{location.pathname}'</span></div>
          <a class="w-screen bottom-3  text-center font-sans text-xl" href="/">GO HOME ?</a>
        </div>
      </div>
    );
  }
export default Page404;  