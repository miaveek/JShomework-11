window.onload = () =>{
    document.addEventListener('keydown', (event)=> {
        const getDivs =document.querySelectorAll(".loren");
        // Определяем нажатую кнопку и используем switch для задания цвета .
        switch(event.code){
            case "KeyR": for ( let i = 0; i < getDivs.length; i++) { getDivs[i].style.color = "red";} break;
            case "KeyG": for ( let i = 0; i < getDivs.length; i++) { getDivs[i].style.color = "green";}break;
            case "KeyB": for ( let i = 0; i < getDivs.length; i++) { getDivs[i].style.color = "blue";}break;
        }
});
}

