for ( let li of tree.querySelectorAll('li')){
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling);
}
tree.onclick = e =>{
    if (e.target.tagName != 'SPAN') return;

    let childreContainer = e.target.parentNode.querySelector('ul');

    if(!childreContainer) return;

    childreContainer.hidden = !childreContainer.hidden;

    if (childreContainer.hidden){
        e.target.classList.add('hide');
        e.target.classList.remove('show');        
    }
    else{
        e.target.classList.add('show');
        e.target.classList.remove('hide');  
    }
}