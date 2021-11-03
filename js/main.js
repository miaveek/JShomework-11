window.onload = () =>{
   const SaveBtn = document.getElementById('SaveBtn'),
   SaveMessage = document.getElementById('SaveMessage');
   TextArea = document.forms[0]; //наша форма 
   flag = false; //флаг записи текста

   SaveBtn.addEventListener("click",(e)=>{ //проверка  и сохранение текста из input поля.
            if(TextArea[0].value.length >= 5){ // 5 это минимальное количество символов для сохранения.

                if(SaveMessage.style.display !="block"){SaveMessage.style.display = "block";}
                else{ SaveMessage.style.display = "none";}
                 flag = true;
            }
            else{ 
                SaveMessage.innerHTML ="Текстовое поле пустое или Cлишком мало текста";
                SaveMessage.style.display = "block";
            }
            e.preventDefault();
   },true);

    window.onbeforeunload = (e)=> { //Проверка при закрытии окна или браузера.Используется устаревший метод для отображения в браузерах так как "beforeunload" часто блокируется.
         if(flag){e.preventDefault();}
       else{window.confirm("Есть несохраненные данные ");return false;}
    }
    /*
    window.addEventListener("beforeunload",(e)=> { 
        if(flag){e.preventDefault();}
      else{return confirm("Есть несохраненные данные ")}
   });*/
}
  
  