var webname=document.getElementById("name");
var webURL=document.getElementById("link");
var bottun=document.getElementById("sdtn");
var t=document.getElementById("tbody");
var localstor=localStorage.getItem("Site");
var sites=[];


if(localstor)
{
     sites=JSON.parse(localstor);
}
showData();

function main(){
     getsite();
     showData();
}

function getsite()
{
     if(!bottun.hasAttribute("data-bs-toggle")||!bottun.hasAttribute("data-bs-target")){
          var site=
          {
               name:webname.value,
               url:webURL.value
          }
          sites.push(site);
          localStorage.setItem("Site",JSON.stringify(sites));
          clearinputs();
     }
}

function clearinputs()
{
     webname.value="";
     webURL.value="";
}

function showData()
{

     var Data=``;
     for (let i= 0; i < sites.length; i++) {
           console.log()
           Data+=`
           <tr>

               <td>${i+1}</td>
               <td>${sites[i].name}</td>
               <td><a type="button" href="${sites[i].url}" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</a></td>
               <td><button type="button" onclick="DeleteData(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> Delete</button></td>
               
          </tr>
           `
     }
     t.innerHTML=Data;

}

function DeleteData(i)
{
     sites.splice(i,1);
     showData();
     localStorage.setItem("Site",JSON.stringify(sites));
}

function checkURL(){
     var regex2=/[a-zA-Z1-9]{3,}/gm;
     var regex=/^https:\/\/(www.)?[a-zA-Z1-9]{2,20}\.[a-zA-Z]{2,5}$/;
     if(!regex.test(webURL.value))
     {
          bottun.setAttribute("data-bs-toggle","modal");
          bottun.setAttribute("data-bs-target","#exampleModal");
          webURL.classList.add("is-invalid");
     }
     else if( regex.test(webURL.value) && regex2.test(webname.value)){
          bottun.removeAttribute("data-bs-toggle");
          bottun.removeAttribute("data-bs-target");
          webURL.classList.remove("is-invalid");
     }

     if(!webURL.value ||  regex.test(webURL.value)  ){
          webURL.classList.remove("is-invalid");
     }
}

function checkName(){
     var regex2=/[a-zA-Z1-9]{3,}/;
     var regex=/^https:\/\/(www.)?[a-zA-Z1-9]{2,20}\.[a-zA-Z]{2,5}$/;

     if(!regex2.test(webname.value))
     {

          bottun.setAttribute("data-bs-toggle","modal");

          bottun.setAttribute("data-bs-target","#exampleModal");

          webname.classList.add("is-invalid");

     }

     else if( regex2.test(webname.value) &&  regex.test(webURL.value))
     {

          bottun.removeAttribute("data-bs-toggle");

          bottun.removeAttribute("data-bs-target");

     }

     if(!webname.value || regex2.test(webname.value) ){
          webname.classList.remove("is-invalid");
     }
}