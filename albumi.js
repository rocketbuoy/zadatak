let ocjenaInput = document.getElementById("ocjena");
let nazivInput = document.getElementById("naziv");
let submit = document.getElementById("dodajGmb");
let container = document.getElementById("popis1");
 
 
submit.addEventListener("click", dodajAlbum);
 
 
function dodajAlbum (){
 
    const nazivValue = nazivInput.value;
    const ocjenaValue = ocjenaInput.value;
 
    if (!nazivValue || !ocjenaValue){
        alert("Molimo unesite naziv i ocjenu");
        return;
    }
    
 
    const newDiv = document.createElement("div");
    const crta = document.createElement("hr");
    newDiv.appendChild(crta);
    const album = document.createElement("p");
    album.textContent = nazivValue;
    newDiv.appendChild(album);
    const ocjena = document.createElement("p");
    ocjena.textContent = ocjenaValue;
    newDiv.appendChild(ocjena);
 
    const now = new Date();
    const datum = document.createElement("p");
    datum.textContent = `Kreirano: ${now.toLocaleString()}`;
    newDiv.appendChild(datum);
 
 
    const label = document.createElement("label");
    label.setAttribute("for", "favorit");
    label.textContent = "Favorit";
    newDiv.appendChild(label);
 
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    newDiv.appendChild(checkbox);
 
    const razmak = document.createElement("br");
    newDiv.appendChild(razmak);
 
    const button = document.createElement("button");
    button.className = "ukloni";
    button.textContent = "Ukloni s popisa";
 
    button.addEventListener("click", function() {
        container.removeChild(newDiv);
 
 
 
    });
    newDiv.appendChild(button);
 
    container.appendChild(newDiv);
 
 
}