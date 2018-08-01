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
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})

var child2=document.querySelector("#child2");
//career
function career(car){
  var heading=document.createElement("h2");   //heading
  heading.textContent="Career Objective";     //heading
  child2.appendChild(heading);       //heading
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);

}
   //education
   function education(edu){
     var heading=document.createElement("h2");   //heading
     heading.textContent="Education Qualifications";     //heading
     child2.appendChild(heading);       //heading
     var hline=document.createElement("hr");
     heading.appendChild(hline);
     var table=document.createElement("table");//table creation
     child2.appendChild(table);// table added to rightChild
     var tr="<tr><td>S No</td><td>Degree</td><td>Institute</td><td>Data</td></tr>"
     //table.innerHTML=tr;
     table.border="1";
     var tr1="";
     for(var i=0;i<edu.length;i++)
     {
       tr1+="<tr><td>"+i+1+"</td>   <td>"+edu[i].degree+"</td>     <td>"+edu[i].institute+"</td>    <td>"+edu[i].data+"</td></tr>"
   }
   table.innerHTML=tr+tr1;
   }


   //skills
function skills(skill){
  var heading=document.createElement("h2");   //heading
  heading.textContent="Technical Skills";     //heading
  child2.appendChild(heading);       //heading
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  for(var i=0;i<skill.length;i++){
  var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child2.appendChild(title);
  var list=document.createElement("ul");
  child2.appendChild(list);
  //console.log(skill[i].set.length);
  for (var j = 0; j < skill[i].set.length;j++) {
    var listItem=document.createElement("li");
    listItem.textContent=skill[i].set[j];
    list.appendChild(listItem);
  }
}
}
function achievements(achievement)
{
  var heading=document.createElement("h2");   //heading
  heading.textContent="Achievements";     //heading
  child2.appendChild(heading);       //heading
  var hline=document.createElement("hr");
  heading.appendChild(hline);
  var list=document.createElement("ul");
  child2.appendChild(list);
  var i=0;
  while(i<achievement.length){
    listItem=document.createElement("li");
    listItem.textContent=achievement[i].achievedData;
    list.appendChild(listItem);
    //listItem+="<li>"+achievement[i].achievedData+"</li>";
    i++;
  }
}
