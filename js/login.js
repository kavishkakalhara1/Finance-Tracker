document.querySelectorAll('input').forEach((item) =>{
    item.addEventListener("focus",function(){
        item.previousElementSibling.className = 'Label-selected';
    })
    item.addEventListener("blur",function(){
        if(item.value == ""){
            item.previousElementSibling.className = '';
        }
    })
});


document.querySelectorAll('input[type="password"]').forEach((passwordInput)=>{
    const parentContainer = passwordInput.parentElement;

    const togglePasswordIcon = document.createElement('i');
    togglePasswordIcon.className = 'fa-solid fa-eye';
    togglePasswordIcon.id = 'togglePassword';

    parentContainer.appendChild(togglePasswordIcon);

    passwordInput.addEventListener("focus",function(){
        togglePasswordIcon.style.display = 'block';
    });

    document.addEventListener("mousedown",function(event){
        const isToggleiconClicked = event.target === togglePasswordIcon;
        if(isToggleiconClicked){
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type',type);

            event.preventDefault();
        } else {
            togglePasswordIcon.style.display = 'none';
        }
    });
});


document.getElementById("registerLink").addEventListener("click",function(){
    if(window.innerWidth<600){
        document.getElementById("login").style.display = 'none';
        document.getElementById("signup").style.display = 'block';
    }
    else{
        document.getElementById("overlay2").style.transform = 'translate(100%, -25px)';
    }
});

document.getElementById("loginLink").addEventListener("click",function(){
    if(window.innerWidth<600){
        document.getElementById("signup").style.display = 'none';
        document.getElementById("login").style.display = 'block';
    }
    else{
        document.getElementById("overlay2").style.transform = 'translate(0%, -25px)';
    }
});