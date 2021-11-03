window.onload = () =>{
   
    randomPosArgument =(min,max) =>{
        let rand = min + Math.random() * (max + 1 - min);//получение случайного числа в дипазоне от min до max  для сдвига.
        return  Math.floor(rand);
    }
   getArguments =(min,max)=>{
  
    let positions = ["top","left","right","bottom"],
       words = ["получи - 20%","Неуспел","почти получилось","Скидки закочелись","Повезет позже","-50% на все","Особая скидка","Эх =(",],
       word = words[Math.floor(Math.random() * words.length)] + "!",//выбираем случайное слово
        results = positions
        .sort(function() { return .4 - Math.random() })//Перемешиваетм масив
        .slice(0, 2); // Выбираем 2 элемента
    //выставляем новую позицию
    let honeyPot = results[0] +":"+randomPosArgument(min,max) +"px",
        honeyPot2 = results[1]+":"+randomPosArgument(min,max) +"px";
        //console.log(honeyPot2,honeyPot);
   return  sale.style = honeyPot,
           sale.style= honeyPot2,
           sale.innerHTML = word;
   }
   sale.addEventListener("mouseover",e=>{getArguments(0,450); })
}
  
  