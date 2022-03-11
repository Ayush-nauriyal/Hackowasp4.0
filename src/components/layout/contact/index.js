import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className="contact-us mt-5">
        <div className="contact-info row">
       <div className="info col-md-5">
           <h1>EMAIL US FOR MORE </h1>
           <h1>INFORMATION! <hr/></h1>
          
          
           <h2>EVERYDAY OPEN</h2>
           <h3>SUN - TUE : 4 PM - 10.30PM</h3>
           <h3>FRI-SAT : 4 PM - 11.00 PM</h3>

           <h3>Phone No:  </h3>
           <h4>+91 XXXXXXXXXXXXXX
               <br/>
               +91 XXXXXXXXXXXXXX</h4>
               <h3>Email: </h3>
           <h4>xyz123@gmail.com
               <br/>
               123xyz@gmail.com</h4>
               

          
       </div>


<div className="col-md-7  " >

      <form action="/">
           <div className="form-group">
               <label for="name">Name</label>
               <input type="text" name="query"/>
           </div>

           <div className="form-group">
            <label for="mail">Your Email</label>
            <input type="email" name="query" placeholder="@"/>
        </div>
        <div className="form-group">
            <label for="no.">Your Phone</label>
            <input type="phone" name="query"/>
        </div>
        <div className="form-group">
            <label for="name">Subject</label>
            <input type="text" name="query"/>
        </div>
        <div className="form-group">
            <label for="text">Write your request here</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
           </div>

         <div className="form-group">
           <button className="bttn">Send</button>
           </div>
        
        </form>
</div>
        </div>
        </div>

  )
}
