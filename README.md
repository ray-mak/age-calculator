<h1>Overview</h1>
<p>This is the solution to the Age Calculator App Challenge on Frontend Mentor.</p>
<h2>The Challenge</h2>
Users should be able to:
<br>
<br>
<ul> 
<li>View an age in years, months, and days after submitting a valid date through the form </li>
<li>Receive validation errors if:</li>
<li>Any field is empty when the form is submitted</li>
<li>The day number is not between 1-31</li>
<li>The month number is not between 1-12</li>
<li>The year is in the future</li>
<li>The date is invalid e.g. 31/04/1991 (there are 30 days in April) </li>
<li>View the optimal layout for the interface depending on their device's screen size</li>
<li>See hover and focus states for all interactive elements on the page</li>
</ul>
<h2>My Process</h2>
<p>The first thing I did was create the layout for the app. This was relatively straightforward. I used this opportunity to get more practice using descendant selectors to display error messages and icons.</p>
<p>The javascript was the most tricky part of this app. I had to use a lot of nested if statements to account for the different combinations of month, date and year. I also had to write multiple functions to check input values to determine if the inputted date is actually correct.</p>
<p>The nested if statements took the most time, however it wasn't overly complicated as the logic was relatively straightforward. The part that is still confusing me is calculating leap years. That is still not factored into the age calculation at the time of writing this.</p>
<h3>Built With</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ul>

<h3>What I Learned</h3>
<p>I got to practice writing nested if statements and better understand the logic behind it. I'm also much more familiar with the date objects and functions. I was also able to sharpen up my form validation skills.</p>

<h3>Continued Development</h3>
<p>I feel like I can definitely improve my Javascript. The current Javascript is quite lengthy, and I feel the same result can be achieved with less code. I'm going to figure out how I can account for leap years in the calculator as well. Furthermore, I would like to get better with dates and date constructors.</p>

<h2>Author</h2>
<p>Ray Mak</p>
<p>Frontend Mentor</p>https://www.frontendmentor.io/profile/ray-mak
