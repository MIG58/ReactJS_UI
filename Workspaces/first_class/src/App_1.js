import React from 'react';
import './App.css';

function App() {
return (
<div >
  <h1> Hello React</h1>
  <F1 />
  <F2 />
  <F3 />
  <F4 />
  <F5 />
  <F6 />
  <F7 />
  <F8 />
  <F9 />
  <F10 />
  <PersonalInfo />
  <StudentRecords10 />
  <Myform/>
  <Rules/>
  <Notice/>
</div>
);
}

function F1(){
return( <h1> Hello Function h1 heading</h1> );
}
function F2(){
return( <h2> Hello Function h2 heading</h2>);
}
function F3(){
return( <h3> Hello Function h3 heading</h3>);
}
function F4(){
return( <h4> Hello Function h4 heading</h4> );
}
function F5(){
return( <h5> Hello Function h5 heading</h5> );
}
function F6(){
return(
<h6> Hello Function h6 heading</h6>
);
}
function F7(){
return(
<p> Hello Function paragraph</p>
);
}
function F8(){
return(
<b> Hello Function bold</b>
);
}
function F9(){
return(
<p> Hello Function 1</p>
);
}
function F10(){
return(
<p> Hello Function 1</p>
);
}
function PersonalInfo(){
return(
<pre>
    <h2>Personal Info</h2>
    Name: Michael Gomes<br/>
    Roll: 31001221039<br/>
    Dept: BCA<br/>
    SEM: 6th<br/>
  </pre>);
}
function StudentRecords10(){
return(
<table border={1}>
  <thead>
    <tr>
      <th>Serial</th>
      <th>Name</th>
      <th>Roll</th>
      <th>Color</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Michael</td>
      <td>39</td>
      <td>Yellow</td>
      <td>INDIA</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ananya</td>
      <td>42</td>
      <td>Blue</td>
      <td>AUSTRALIA</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Aryan</td>
      <td>18</td>
      <td>Green</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Isha</td>
      <td>25</td>
      <td>Red</td>
      <td>CANADA</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Raj</td>
      <td>31</td>
      <td>Orange</td>
      <td>FRANCE</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Priya</td>
      <td>16</td>
      <td>Purple</td>
      <td>GERMANY</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Kiran</td>
      <td>29</td>
      <td>White</td>
      <td>SOUTH AFRICA</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Vivek</td>
      <td>22</td>
      <td>Black</td>
      <td>SINGAPORE</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Sanya</td>
      <td>37</td>
      <td>Brown</td>
      <td>UNITED KINGDOM</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Arjun</td>
      <td>45</td>
      <td>Gray</td>
      <td>BRAZIL</td>
    </tr>
  </tbody>
</table>

);
}
function Myform(){
return(
 <form action="#" method="post">
<br />
  Name: <input type="text" name="name" id="name"/><br/>
  Email: <input type="email" name="email" id="email"/><br/>
  Phone: <input type="number" name="phone" id="phone"/><br/>
  Password: <input type="password" name="pass" id="pass"/><br/>
  <input type="submit" name="submit" id="submit" value="Submit"/>&nbsp;&nbsp;
  <input type="reset" value="Clear"/>
  </form>
);
}
function Rules(){
  return(
    <ol>
      <h1>Rules for Students</h1>
        <li>
            <strong>Attendance:</strong> Regular attendance is mandatory for all classes.
        </li>
        <li>
            <strong>Punctuality:</strong> Students must arrive on time for classes and meetings.
        </li>
        <li>
            <strong>Academic Integrity:</strong> Plagiarism and cheating are strictly prohibited.
        </li>
        <li>
            <strong>Respect:</strong> Treat fellow students, faculty, and staff with respect and courtesy.
        </li>
        <li>
            <strong>Mobile Phones:</strong> Keep mobile phones on silent during classes and meetings.
        </li>
    </ol>

  );
}
function Notice(){
  return(

    <marquee height="40%"> Hello this is Notice in marquee </marquee>
    );
}

export default App;
