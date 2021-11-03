window.onload = () =>{
    document.addEventListener('keydown', (event)=> {
    let allertMsg = document.querySelector("#alert"),
        keyСomb = event.ctrlKey && event.code,
        keyСomb2 =event.ctrlKey && event.shiftKey && event.code;
        
        //Выводим сообщеие в соответствии с комбинацией клавиш.
        if (keyСomb == 'KeyS') { event.preventDefault();allertMsg.innerHTML = 'Сохронено';} 
        if (keyСomb == 'KeyA') { event.preventDefault();allertMsg.innerHTML = 'Выбрано все';}
        if (keyСomb2== 'KeyS') { event.preventDefault();allertMsg.innerHTML = 'Сохронено все';}    
});
}


