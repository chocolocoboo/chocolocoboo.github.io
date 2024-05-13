function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

addEventListener("load", (event) => {});

onload = async (event) =>
{
	//var name = document.getElementById("nameTextField");
};

const calculateBtn = document.getElementById("Calculate");
calculateBtn.addEventListener("click", calculateFunction);


async function calculateFunction()
{
	var name = document.getElementById("name");
	console.log(name.value);
	var name2 = document.getElementById("name2");
	console.log(name2.value);
	const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=' + name.value + '&fname=' + name2.value;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '906ad0658cmsh9388e110cacb6cfp1903e5jsn187798779828',
			'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
		}
	};
		try {
			const response = await fetch(url, options);
			const data = await response.json();
			console.log(data);


			document.getElementById("result").innerHTML = " Percentage: " + data.percentage + "%" + " " + data.result;
		} catch (error) {
			console.error(error);
		}
		
}




