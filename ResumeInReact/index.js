// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from "react"
import REACTDOM from "react-dom"

function Me(){
  return(
    <div>
      <h1>Mark Wight</h1>
      <h1> Computer Science Undergrad </h1>
      
      <p><b> Application: </b></p>
        <ul>
          <li>Computer science undergrad looking for full time employment, U.S. Citizen</li>
          <li>Applying for bay area postings</li>
        </ul>
      
      <p><b> Education: </b></p>
        <ul>
          <li>University of San Francisco Undergraduate</li>
          <li>Classes</li>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C and Parallel Programming</li>
              <li>Software Development (+ debuggers, unit testing, parallel efficiency, web engine, servers, relational databases, intro to SQL) </li>
              <li>Assembly and Architecture</li>
              <li>Programming Paradigms</li>
              <li> Operating Systems</li>
            </ul>
        </ul>
      
      <p><b> Work Experience: </b></p>
        <ul>
          <li> January 2019 - May 2019 USF </li>
          <ul>
            <li> Worked in a team of 3 and a sponsor to create a VR educational experience and tour of the USF main campus using a 360 camera, video software editing, Unity, C#, and the Oculus GO. Personally responsible for a fair amount of the scripting and Unity work as well as being very active in teamwork communication. </li>
            <li>Sponsor: Insun He - ihe@usfca.edu</li>
          </ul>
        </ul>
        
      <p><b> Skills: </b></p>
      <ul>
        <li>Knowledgeable in Java, Python,  HTML + CSS, C, C#, C++ </li>
        <li>Intermediate knowledge in Javascript, Vue.js, SQL/ PostgreSQL, NoSQL/ MongoDB, Unity.</li>
        <li>Deep understanding of data structures and algorithms, Object Oriented Programming, critical thinking and problem solving; reading from, analyzing, and working with scalable databases, parallel computing, RESTful philosophy </li>
        <li>Comfortable working in teams and communicating with others while also working independently. Also have leadership experience working with and managing people.</li>
        <li>Willing to learn anything else required, a self starter, and have a go-getter attitude</li>
        <li>Comfortable in Windows, MacOS, and Linux </li>
      </ul>
    </div>
  )
}

REACTDOM.render(<Me/>, document.getElementById('root'))