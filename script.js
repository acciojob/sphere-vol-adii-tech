function volume_sphere() {
    //Write your code here
   let radius=document.getElementById('radius').value;
  console.log(radius);
  let ans;
  if(radius){
  // ans=(4*3.14*radius*radius*radius)/3;
  ans=(4*Math.PI*Math.pow(radius,3))/3;
  }
  let volume=document.getElementById('volume');
//   console.log(volume);
if(ans!=undefined){
    volume.value=ans.toFixed(4);
}
return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
