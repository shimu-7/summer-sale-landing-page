document.getElementById('k-1').addEventListener('click',function(){
    const title=selection('k1-title');
    const price=parseFloat(selection('k1-price'));
    
    adding(title, price); 
})
document.getElementById('k-2').addEventListener('click',function(){
    const title=selection('k2-title');
    const price=parseFloat(selection('k2-price'));
    
    adding(title, price); 
})
document.getElementById('k-3').addEventListener('click',function(){
    const title=selection('k3-title');
    const price=parseFloat(selection('k3-price'));
    
    adding(title, price); 
})
document.getElementById('s-1').addEventListener('click',function(){
    const title=selection('s1-title');
    const price=parseFloat(selection('s1-price'));
    
    adding(title, price); 
})
document.getElementById('s-2').addEventListener('click',function(){
    const title=selection('s2-title');
    const price=parseFloat(selection('s2-price'));
    
    adding(title, price); 
})
document.getElementById('s-3').addEventListener('click',function(){
    const title=selection('s3-title');
    const price=parseFloat(selection('s3-price'));
    
    adding(title, price); 
})
document.getElementById('f-1').addEventListener('click',function(){
    const title=selection('f1-title');
    const price=parseFloat(selection('f1-price'));
    
    adding(title, price); 
})
document.getElementById('f-2').addEventListener('click',function(){
    const title=selection('f2-title');
    const price=parseFloat(selection('f2-price'));
    
    adding(title, price); 
})
document.getElementById('f-3').addEventListener('click',function(){
    const title=selection('f3-title');
    const price=parseFloat(selection('f3-price'));
   
    adding(title, price); 
})


document.getElementById('text').addEventListener('keyup',function(event){
    const get=event.target.value;

    if(get=='SELL200')
    {
        document.getElementById('apply').addEventListener('click',function(){
            const discount=(20*totalPrice)/100;
            document.getElementById('discount').innerHTML=(Math.round(discount * 100) / 100).toFixed(2);
            const price=totalPrice-discount;
            document.getElementById('price').innerHTML=(Math.round(price * 100) / 100).toFixed(2);;
            document.getElementById('text').value='';
        });
    }
    else
    {
        document.getElementById('apply').addEventListener('click',function(){
            document.getElementById('text').value='';
        })
    }
    
})

document.getElementById('go').addEventListener('click',function(){
    document.getElementById('discount').innerHTML=`0.00`;
    document.getElementById('total-price').innerHTML=`0.00`;
    document.getElementById('price').innerHTML=`0.00`;
    var list = document.getElementById('list');
    //e.firstElementChild can be used.
    var child = list.lastElementChild; 
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
})
