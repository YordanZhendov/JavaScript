function create() {
   const div=document.createElement('div'); 
   div.className='codelHeader'; 
   const span=document.createElement('span');
   span.className='language';
   span.textContent='*Language*';
   const button=document.createElement('button');
   button.className='copy-btn';
   button.textContent='copy';
   const img=document.createElement('img');
   img.className='button-icon';
   img.src='https://www.ablebulgaria.org/wp-content/uploads/bfi_thumb/boss-by-able-logo-1-nu1f3bnu62vz5api4bzx4dtdmvnvvf699f4h6ise60.jpg';
   div.appendChild(span);
   button.appendChild(img);
   div.appendChild(button);
   document.getElementById('content').appendChild(div);
   

}

// div class="codelHeader"
//    span class="language" *Language* span
//    button  class="copy-btn"  
//       img class="button-icon" src="...link"
//       img
//     copy 
//    button
// div
// pre pre