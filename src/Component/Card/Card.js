import React, { useState } from 'react';
import './Card.css'
const Card = ({ Data }) => {
// let op=Data.slice(0,10);

// let [more,setMore]=useState(op);
// let testFunction=()=>{
//     return(
//         setMore(Data)

//     )
// }
    return (
        <>
            <div className="test">
                {Data.map((ele) => {
                    return (
                        <div className="card">
                            <div className="top">
                                <h6 className="hover">{ele.id}</h6>
                                

                            </div>
                            <div className="body">
                                <h4>{ele.name}</h4>
                                <div className="styleimg">
                                <img src={ele.images} alt="images" />
                                
                                </div>
                                <div className="oder_section">

                                    <h3>Price: {ele.price} ৳</h3>
                                    
                                    <div className="button ">
                                        <button type='submit' className="hover" onClick={()=>alert('Musaddik said "this function will be developed very sooon and "There is still a lot of work to be done on this website...so i will finish the work very sooon ...In Sha Allah"')} >Oder Now</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                })}
                
            </div>
            {/* <div className="more" onClick={testFunction}>
                    <h4>Lord More</h4>
                </div> */}
        </>


    );
};

export default Card;