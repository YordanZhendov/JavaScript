function deleteByEmail() {
    const emailToDelete=document.querySelector('input[name="email"]').value;
    const emails=Array.from(document.querySelectorAll('tbody tr'));

    let deleted=false;

    for( const row of emails){
       
        if(row.children[1].textContent == emailToDelete){
            row.parentNode.removeChild(row);
            deleted=true;
        }
        
    }
    
    if(deleted){
        document.getElementById('result').textContent='Deleted.'
    }else{
        document.getElementById('result').textContent='Not Found'

    }
}