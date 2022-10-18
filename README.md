# Responsive Tip Calculator App

## Hello! 👋

This project is a solution for a challenge developed by [Frontend Mentor](https://www.frontendmentor.io). To start the challenge, we receive screenshots of the final product and some guidelines on style and expectations on the usability. The rest was up to me, what is very exciting and mildly terrifying. 🙃
I particularly enjoy completing these type of challenges as they are a great opportunity to develop my skills in a similar context to real world workflow. Once I was done, I also published it on the Frontend Mentor platform and had the chance to receive feedback from the community. Feel free to visit [my profile at Frontend Mentor]( https://www.frontendmentor.io/profile/ga-bri-ela). 

## The Challenge 🧩

According to Frontend Mentor, to complete the [Tip Calculator App]( https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX) Challenge, the users should be able to:
-	View the optimal layout for the app depending on their device’s screen size
-	See hover states for all interactive elements on the page 
-	Calculate the correct tip and total cost of the bill per person

This is a screenshot of the final result:

![screenshot of the tip calculator app](https://github.com/ga-bri-ela/Responsive-Tip-Calculator-App/blob/main/splitter%20one.png?raw=true)

## Technologies 💻

This project was built using JavaScript ES6, CSS and HTML.

## Personal take-aways 👩‍💻

It took me a long time to figure out how to get the value from the percentage buttons into the calculating functions. Using classes as a tool to accomplish that added this great new problem-solving strategy that I can use to develop my coding projects. So, this was definitely the biggest game changer I have from completing this project. 

In the code snippet below you can see how I use the class “selected” in the buttons event listener to first clear out any previously selected button, and then select a new button:

> buttonArray.forEach((button) => {
> 
>	    button.addEventListener("click", () => {
>	    
>	        buttonArray.forEach((button) => {
>	        
>	            button.classList.remove('selected');
>	            
>	            button.disabled = false;
>	            
>	        });
>	        
>	        tipCustom.classList.remove('selected');
>	        
>	        isClicked = true;
>	        
>	        button.classList.add('selected');
>	        
>	        button.disabled = true;
>	        
>	        if(billTotal.value > 0 && numberOfPeople.value > 0){
>	         
>	            calculator();
>	            
>           };
>           
>});
>
>});

Later, inside of my calculating function, I create the variable “percentage” that holds the amount corresponding to the value attribute of the element with the class “selected”, as you can see here:

> let percentage = document.querySelector('.selected').value;

I also had a great time “breaking” my project on the browser to make sure the solution would be fully responsive and would work both in a mobile and desktop version. Frontend Mentor also provided a screenshot of the expected mobile result, and I am quite happy with how close I managed to get to their design.




