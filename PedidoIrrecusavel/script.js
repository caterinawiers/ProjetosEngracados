    function sim (){
      alert("Você aceitou fazer o pix de 100zinho pra mim! YAY");
      location.href = "https://www.youtube.com/watch?v=ZbZSe6N_BXs";
    }

    function desvia (btn){
    
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa...desviei hihihihih');
    } 

    function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
    }

