(() => {

const emptyArray = [];
const startbtn = document.getElementById("run");
const counterInitializ = document.getElementById("image1.jpg");
const label = document.getElementById("label");
var count = -1;

startbtn.addEventListener("click", () => {
    count++;
    console.log(count);
    document.getElementById("zero").innerHTML = count;

    var count = 0;
    var button = document.getElementById('initializ');
    
    button.onclick = updateStatus;
    
    function updateStatus() {
       // button.textContent = 'You have ' + ++count + ' Cookies';
       document.getElementById('displaycount').innerHTML= 'You have ' + ++count + ' Cookies'; 
    }
    
});
    
})();



