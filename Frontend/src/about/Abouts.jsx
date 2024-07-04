import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.jsx";
function About() {
  return (
    <>
      <Navbar />
      <div className="  min-h-screen"> 
         <h1 className=" px-20 mt-20 text-2xl ">
        Career Opportunities:
        </h1>
        <p className=" px-20 ">
        <h2 className="text-md underline">High Demand:</h2> 
        <p>The tech industry is booming, and there's a consistent demand for skilled programmers. Companies in every sector need developers.</p>
<h3 className="text-md underline">Diverse Roles:</h3> 
<p>From software development to data science, web development, AI, and cybersecurity, the career paths are diverse and plentiful.</p>
<h4 className="text-md underline">Competitive Salaries:</h4>
 <p>Programming jobs are often well-compensated, with many roles offering salaries above the average for other professions.</p>
       
        <p>
        <h5 className="text-md underline">Build Your Ideas:</h5> Programming lets you bring your ideas to life. Whether it's a personal project, a startup, or a solution to a problem, coding empowers you to create software that can make a difference.
       <h6 className="text-md underline">Creative Outlet:</h6> Coding is a form of art. Just as artists express themselves through painting or music, you can express creativity by developing apps, games, and websites.
        </p>
        <p>
Learning coding and programming can be a transformative journey, offering numerous benefits both personally and professionally.
        </p>
        <p className="text-md underline text-2xl">Name: </p>
        <h3>Varad Sukhdev Wagh</h3>
        <p className="text-md underline text-2xl">Email: </p>
          <p>varadwagh326@gmail.com</p>
          <h1 className="text-md">OR</h1>
          <h2>varadwagh327@gmail.com</h2>
         
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;

