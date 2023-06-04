import React from 'react';


const About = () => {
return (
     <div>
       <section id="about">
         <div className="container my-5 py-5">
               <div className="row">
               <div className="col-md-6">
               <img src="/assets/about1.jpg " alt="About" 
               className= "w-75 mt-5" />
               </div>
               <div className="col-md-6">
               <h3 className="fs-5 mb-0">O Nama</h3>
               <h1 className="display-6 mb-2">Ko <b>Smo</b> Mi</h1>
               <hr className="wb-50"/>
               <p className="lead text-black mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, consectetur.
               Quae minus magnam blanditiis alias optio quam possimus eaque! Illum eligendi, adipisci, rem at totam,
               quaerat praesentium mollitia eos nihil unde perspiciatis magni sed laudantium aliquam tenetur facilis. 
               Sint harum magnam ipsa distinctio ut cum nulla delectus cumque temporibus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatibus eius veniam, aut cupiditate magnam nesciunt autem
               ,similique eos repellendus perspiciatis delectus minus provident modi!</p>
               <button className="btn btn-primary px-4 py-2 rounded-pill">Registrujte se odmah</button>
               <button className="btn btn-outline-primary px-4 py-2 rounded-pill ms-2">Kontaktirajte nas</button>

               </div>
               </div>
               </div>      
               </section>               
               </div>          
);

}
export default About;

