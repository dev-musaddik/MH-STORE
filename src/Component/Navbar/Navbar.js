import React from 'react';
import "./Navbar.css"


const Navbar = ({datas, filterFunction}) => {
  
    return (
        
        <>  
        
         
          <div className="Name">MUSADDIK HOSEN</div>
            <div className="Nav">
                
                <div className="navbar">
                    
                    <div className="btn-group">
                        {

                            datas.map((ele)=>{
                                return(
                                   <button className="btn-group_item" onClick={()=>filterFunction(ele)} >
                                    {ele}</button>
                                )
                            })
                        }
                        
                    </div>
                       
                </div> 
                <div className="taka" >
                          
                        </div>
            </div>    
        </>
    );
};

export default Navbar;