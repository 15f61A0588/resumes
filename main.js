// function loadJSON(file,callback)
// {
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function()
// {
// if(xhr.readystate==4 && xhr.status=="200"){
// callback(xhr.responseText);
// }
// }
// xhr.send();
// }
// loadJSON("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
// })


function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else {
        reject(new Error('error'));
      }
    })
  })
}

var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
})
