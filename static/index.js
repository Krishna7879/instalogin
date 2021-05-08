let btn=document.getElementById('btn');
    let text=document.getElementById('text');
    let pass=document.getElementById('pass');
    let input=Array.from(document.querySelectorAll('input'));

   input.forEach((element,index)=>{
       element.addEventListener('input',()=>{
             if(text.value.length>=1 && pass.value.length>=6){
               btn.disabled=false;
               btn.style.opacity=1;
            }
            else{
               btn.style.disabled=true;
               btn.style.opacity=0.3;       
           }

       })
   })
let show=document.getElementById('show');
input[1].addEventListener('input',()=>{
    if(input[1].value.length==0){
        show.style.display='none';
    }
   else if(input[1].value.length>=0){
        show.style.display='block';

    
        show.addEventListener('click',()=>{
            input[1].type='text';
            if(show.style.display!='none'){
                show.style.display='none';
                Hide.style.display='block'
                Hide.addEventListener('click',()=>{
                    input[1].type='password';

                    show.style.display='block';
                    Hide.style.display='none'
                })
            }

            
        })
        
    }
  
}) 

// 
input[0].addEventListener('input',()=>{
    let stext=document.getElementById('stext');
    console.log(stext)
    if(input[0].value.length==0){
        stext.style.display='none'
    }
    else{
        stext.style.display='block';
        text.style.padding='14px 0px'
    }
})
input[1].addEventListener('input',()=>{
    let stext=document.getElementById('stext');
    console.log(stext)
    if(input[1].value.length==0){
        spass.style.display='none'
    }
    else{
        spass.style.display='block';
        
        pass.style.padding='14px 0px'
    }
})
