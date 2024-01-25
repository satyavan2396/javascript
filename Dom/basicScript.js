const projectName=document.getElementById("projectName")
console.log(projectName);
console.log(projectName.innerHTML);
console.log(`==============getElementsByTagName()API=============================`);
const liElement=document.getElementsByTagName("li")
console.log(liElement[0].innerHTML);
console.log(liElement[1].innerHTML);
console.log(liElement[2].innerHTML);
console.log(`==============getElementsByClassName()API=============================`);
const liRoles=document.getElementsByClassName("roles")
console.log(liRoles);
console.log(liRoles[0].innerHTML);
console.log(liRoles[1].innerHTML);
console.log(`==============querySelector()API with Tag or element name=============================`);
const elementP=document.querySelector("p");
console.log(elementP);
console.log(elementP.innerHTML);
console.log(`==============querySelector()API with ID=============================`);
const elementLiFirst=document.querySelector("#firstRole")
console.log(elementLiFirst);
console.log(elementLiFirst.innerHTML);
console.log(`==============querySelector()API with Class=============================`);
const elementLiroles=document.querySelector(".roles")
console.log(elementLiroles);
console.log(elementLiroles.innerHTML);
console.log(`==============querySelectorAll()API with Class=============================`);
const elementLiRoles=document.querySelectorAll(".roles")
console.log(elementLiRoles);
console.log(elementLiRoles[0].innerHTML);
console.log(elementLiRoles[1].innerHTML);
console.log(`==========querySelectorAll() API with element name or Tag name ==========`);
const elementsRoles = document.querySelectorAll('.roles');
for (const element of elementsRoles) {
    console.log(element.innerHTML);

}
console.log(`=========================Changing Project name==============`);
const projectelement=document.querySelector("#projectName")
projectelement.innerHTML="Project tile:College management system";
console.log(projectelement.innerHTML);
console.log(`==== Applying CSS properties ========`);
projectelement.style.color = "red";
elementP.style.fontSize = 'large';
elementP.style.fontWeight = 'bold';

console.log(`==== Changing Attribute ========`);
const elementLink = document.querySelector('#visitLink');
elementLink.setAttribute('href', "https://www.w3schools.com/");
elementLink.setAttribute('target', "_self");

console.log(`===========creating new node=========`);
const h2Element=document.createElement("h2");
const textNodeStrength=document.createTextNode("Personal strength");
h2Element.appendChild(textNodeStrength)
const strengthElement=document.querySelector(".strength")
strengthElement.appendChild(h2Element)


console.log(`==== Remove a node ========`);
const elementRolesList = document.querySelector('#rolesList');
const elementRole3 = document.querySelector('#role3');
elementRolesList.removeChild(elementRole3);