import React from 'react'
import emailjs from 'emailjs-com'
function Mailer() {

function sendEmail(e){
    e.preventDefault();
    
    emailjs.sendForm('service_xt5b1sr', 'template_270ujki', e.target,
    "user_ue3fFB61tZzzF4YCe4LUF" 
    ).then(res =>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

    return (
        <div className="container border"
        style={{marginTop:'50px',
        width: "50%" ,
        backgroundImage: `url(https://wallup.net/wp-content/uploads/2016/07/20/26484-colorful-minimalism-orange-gradient-simple.png)`,
        backgroundPosition:'center',
        backgroundSize:'cover',}}>
            <h1>Test Mail</h1>
            <form className="row" style ={{ margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>Name:</label>
                <input type="text" name='name' className="form-control"/>
                <label>Email:</label>
                <input type="email" name='user_email'className="form-control"/>
                <label>Message:</label>
                <textarea name="message" rows='4'className="form-control"/>
                <input type= "submit" value= "Send"className="form-control"/>

            </form>
            
        </div>
    )
}

export default Mailer
