var totalPrice = 0;
function selection(productId) {
    const ans = document.getElementById(productId).innerHTML;
    return ans;
}

function adding(title, price) {
    const list = document.getElementById('list');
    const count = list.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-3');
    p.classList.add('font-semibold');
    p.classList.add('text-lg');
    const text=title+' '+' '+price;
    p.innerHTML = `${count + 1}. ${text}TK`;
    list.appendChild(p);
    
    totalPrice += price;
    
    document.getElementById('total-price').innerHTML=(Math.round(totalPrice * 100) / 100).toFixed(2);;
    if (totalPrice>0) {
        document.getElementById('buy').removeAttribute('disabled');
    }

    if (totalPrice>=200) {
        document.getElementById('apply').removeAttribute('disabled');
    }
    
}


