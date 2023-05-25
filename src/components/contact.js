import React from 'react';
import Nav from './nav'; 
  
function Contact (){
 return (
 <div>
    <Nav/>
    <header></header>
 <section className="contact r-p bg-sec">
 <div className="container text-center">
     <div className="row">
         <div className="col">
             <h2>Contact</h2>
         </div>
     </div>
     <div className="row mt-5">
        
         
         <div className="row mt-5">
             <div className="col">
                 <form>
                     <div className="form-row">
                         <div className="form-group col-md-6">
                             <input type="text" className="form-control" placeholder="Name"/>
                         </div>
                         <div className="form-group col-md-6">
                             <input type="text" className="form-control" placeholder="Email"/>
                         </div>
                     </div>
                         <div className="form-group">
                             <input type="text" className="form-control" placeholder="Subject"/>
                         </div>
                         <div className="form-group">
                             <textarea className="form-control" rows="7" placeholder="message" style={{ resize: 'none' }}></textarea>
                         </div>
                         <button type="submit" className="btn r-btn float-right">Send</button>
                 </form>
             </div>
         </div>
     </div>
 </div>
</section>
</div>
    )

}
  
export default Contact;