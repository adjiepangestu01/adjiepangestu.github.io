var typed = new Typed('.typer', {
    strings: ['youtuber', 'gamers', 'developer'],
    typeSpeed:100,
    backSpeed:50,
    loop:true
  });


  let valueNumbers=document.querySelectorAll(".exp-number");
  let interval=1000;

  valueNumbers.forEach((valueNumber)=>{
    let startValue=0;
    let endValue=parseInt(valueNumber.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(()=>{
      startValue+=1;
      valueNumber.textContent=startValue;
      if(startValue==endValue){
        clearInterval(counter);
      }
    },duration)
  });