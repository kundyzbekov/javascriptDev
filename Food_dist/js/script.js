window.addEventListener('DOMContentLoaded',() => {


    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show', 'fade');
        });
        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    }
    function showTab(i=0){
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTab();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && event.target.classList.contains('tabheader__item')){
            tabs.forEach((item,i) => {
                if(target == item){
                    hideTabContent();
                    showTab(i); 
                }
            });
        }
    });
});