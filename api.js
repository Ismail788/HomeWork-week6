 window.onload = function(){
	// Buttons
	const getBtn = document.getElementById('getBtn');
	const getSearch = document.querySelector('#getSearch')
  const showResult = document.getElementById("#showResult");
   getBtn.addEventListener("clickMe", function(){

   });
   getSearch.addEventListener("userInput", function(){
   });
}
console.log("clickme");
console.log("userInput");
const url = 'https://api.github.com/orgs/HackYourFuture/repos';
const req = new XMLHttpRequest();
req.addEventListener('load', function (data) {
    if (this.status === 200) {
    const responseText = req.responseText;
    const data = JSON.parse(responseText);
    console.log(data);
data.forEach(function (myLi){
  const li = document.createElement('li');
  const nameText=document.createTextNode(myLi.url);
  li.appendChild(nameText);
  showResult.appendChild(li);
});

console.log(data);

} else {
        console.log('Something is probably wrong with the url');
    }
});
req.addEventListener('error', function () {
    console.log('Server error like timeout');
});

req.open("GET", url);
req.send();
