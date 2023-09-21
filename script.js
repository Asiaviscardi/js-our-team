const team = [
    {
        image:"wayne-barnett-founder-ceo.jpg",
        name:"Wayne Barnett", 
        role:"Founder & CEO",
    },
    {
        image: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        image: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        image: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        image: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer"
    },
    {
        image: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic designer"
    }
    
];

const h3 = document.querySelector("h3")


for (let key of team) { 
    const names = document.getElementsByName("h3")

    console.log(h3)

    const image = document.createElement("img");
        image.setAttribute("src", "img/" + team[key]);
        h3.append(image);
  }
  












//document.getElementById("wayne").innerHTML = persona1.name

//document.getElementById("founder").innerHTML = persona1.role

//const persona2 = {name:"Angela Caroll", role:"Chief Editor"}

//document.getElementById("angelac").innerHTML = persona2.name

//document.getElementById("chief").innerHTML = persona2.role

//const persona3 = {name:"Walter Gordon", role:"Office Manager"}

//document.getElementById("walter").innerHTML = persona3.name

//document.getElementById("office").innerHTML = persona3.role

//const persona4 = {name:"Angela Lopez", role:"Social Media Manager"}

//document.getElementById("angelal").innerHTML = persona4.name

//document.getElementById("social").innerHTML = persona4.role

//const persona5 = {name:"Scott Estrada", role:"Developer"}

//document.getElementById("scott").innerHTML = persona5.name

//document.getElementById("developer").innerHTML = persona5.role

//const persona6 = {name:"Barbara Ramos", role:"Graphic Designer"}

//document.getElementById("barbara").innerHTML = persona6.name

//document.getElementById("graphic").innerHTML = persona6.role