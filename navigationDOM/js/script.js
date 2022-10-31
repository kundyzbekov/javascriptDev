// console.log(document.head);
//console.log(document.body.childNodes);
console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for(let node of document.body.childNodes){
    if(node == '#text'){
        continue;
    }
    console.log(node);
}