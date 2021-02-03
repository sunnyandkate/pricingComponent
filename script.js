let btn = document.querySelector('#toggle');
let price1= document.querySelector('.price1');
let price2= document.querySelector('.price2');
let price3= document.querySelector('.price3');
let switchBtn = document.querySelector('.switch-btn');


btn.addEventListener('click', function(){
	
	
	if(btn.checked){
		
		price1.textContent= 199.99;
		price2.textContent= 249.99;
		price3.textContent= 399.99;
	
	}
	else{
		price1.textContent= 19.99;
		price2.textContent= 24.99;
		price3.textContent= 39.99;
		
	}
	
	
	
});

function keyCode(event) {
  var x = event.which;
  if (x == 39) {
		price1.textContent= 19.99;
		price2.textContent= 24.99;
		price3.textContent= 39.99;
		btn.checked =false;
		
	
	}
	else if(x == 37){
		
		price1.textContent= 199.99;
		price2.textContent= 249.99;
		price3.textContent= 399.99;
		btn.checked = true;
	}
  
}

