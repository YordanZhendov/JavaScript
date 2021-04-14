function copyText(str){
    console.log(document.getElementById(str).textContent);   
    const field=document.createElement('textarea');
    field.setAttribute('readonly', '');
    field.style.position = 'absolute';
    field.style.left = '-9999px';
    field.value=document.getElementById(str).textContent;
    document.body.appendChild(field);
    field.select();
    document.execCommand('copy');
    field.remove();
    
}