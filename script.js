// Récupérer les éléments du dom

const champ_textuel = document.getElementById('champ_textuel')
const task_list = document.getElementById('task_list')
const progressBar = document.querySelector('.progress');
const progressText = document.getElementById('progress-text');

function ajouterTache(){
    // verifier si le champ est vide 
    if(champ_textuel.value === ''){
        console.log("Bonjour")
        alert('La tache que vous avez saisi est vide .')
    }
    else if(champ_textuel.value.trim() === ''){
        alert('La tache que vous avez saisi est vide et ne contient que des espaces ')
    }
    else{

        // let li = document.createElement("li")
        // li.innerHTML = champ_textuel.value
        
        // task_list.appendChild(li)

        task_list.innerHTML += ` <li>${champ_textuel.value}
                 
                    <i class="fas fa-trash"></i>
                  
                 
                
            </li>`

    }
    champ_textuel.value =""
    saveData();
    updateProgress()
}

task_list.addEventListener("click" , function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
        updateProgress()
    }else if( e.target.tagName === "I" ){
        e.target.parentElement.remove();
        saveData()
        updateProgress()
    }
} , false);


function updateProgress() {
    const tasks = document.querySelectorAll('#task_list li');  // Récupérer toutes les tâches
    const checkedTasks = document.querySelectorAll('#task_list li.checked');  // Récupérer les tâches cochées

    const totalTasks = tasks.length;
    const completedTasks = checkedTasks.length;

    if (totalTasks > 0) {
        const percentage = Math.floor((completedTasks / totalTasks) * 100);
        progressBar.style.width = percentage + '%';
        progressText.textContent = percentage + '%';
    } else {
        progressBar.style.width = '0%';
        progressText.textContent = '0%';
    }
}

// une fonction pour sauvegarder les données mm lorsque le navigateur est fermé 

function saveData(){
    localStorage.setItem("data",task_list.innerHTML);
}

function showTask(){
    task_list.innerHTML = localStorage.getItem("data");
    updateProgress()
}
showTask();


// ERREURS RENCONTREES :  innerHtml au lieu de innerHTML 

// function remove_all() {
//     let lis = document.querySelectorAll("li");
    
//     lis.forEach(li => li.remove());
// }
// remove_all()