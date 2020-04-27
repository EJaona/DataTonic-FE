import React from 'react';


export default _ => {

    return(
        
        <div className="overall-health">

            <h1>Overall Health {/* need info circle */} </h1>

            <div className="data">
                <div className="img">
                    <img src={require('../../../../img/amazon-logo.png')} alt=""/>
                    
                    
                </div>
                <div className="img">
                    <img src={require('../../../../img/microsoft-logo.png')} alt=""/>
                     
                </div>
                <div className="img">
                    <img src={require('../../../../img/intel-logo.png')} alt=""/>
                     
                </div>
                <div className="img">
                    
                    <img src={require('../../../../img/google-logo.png')} alt=""/>
                     
                </div>

            </div>

        </div>
    )
}