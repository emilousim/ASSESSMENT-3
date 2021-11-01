console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted successfully!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catPic = document.querySelector('img')
catPic.addEventListener('mouseover', compAlert)
function compAlert(){
	alert("You're a good person, and I hope you know it!");
}


