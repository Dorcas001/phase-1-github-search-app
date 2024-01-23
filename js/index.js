    let form  =  document.querySelector('form#github-form');
    let input = document.getElementById('search')
    let userList = document.getElementById('user-list')
    let repoList =document.querySelector('ul#repos-list')

    form.addEventListener('submit',formSubmit) 
    function formSubmit(e){
        e.preventDefault()
        let inputValue =input.value
        userSearch(inputValue)

    }
        
    function userSearch(inputValue){ 
        fetch(`https://api.github.com/search/users?q=${inputValue}`)
        .then(res =>res.json())
        .then(data => {
            let users =data.items
            users.forEach(user =>{
                let li = document.createElement('li')
                li.classList.add('list-user')

                userList.appendChild(li)
                
                li.innerHTML =`<h2>${user.login}</h2>
                <img src="${user.avatar_url}" alt="${user.login}">
                <a href="${user.html_url}">Profile Link</a>
                
                `
                li.addEventListener('click',(e) =>{
                    let gitUser = user.login
                    displayRepo(gitUser)

                })
                
        })})
    } 
function displayRepo(gitUser){
  fetch(`https://api.github.com/users/${gitUser}/repos`)
  .then(response => response.json())
  .then(data =>data.forEach(repo =>{
            let li = document.createElement('li')
            li.classList.add('list-user')
            
            repoList.appendChild(li)
                
            li.innerHTML =`<h2>${repo.full_name}</h2>
            <a href="${repo.html_url}">Profile Link</a><br>
                `
            repoList.appendChild(li)
        })
        )
}
    
    
    
          


   
        
    
  
  
