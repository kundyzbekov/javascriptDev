const btn = document.querySelector('.btn');
let timerId,
    i=0;


function myAnimation(){
    const e = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id);
        } else{
            pos++;
            e.style.top = pos + 'px';
            e.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// });
// function logger(){
//     if(i == 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }