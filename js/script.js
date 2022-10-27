'use strict'

AOS.init();



window.addEventListener('DOMContentLoaded', () => {

    //adaptive menu
    const menu = document.querySelector('#mobile-menu'),
          menuLinks = document.querySelector('.navbar__menu');

    const callMenu = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    };

    menu.addEventListener('click', callMenu);

    //palete constructor
    class PaleteCard{
        constructor(c3, c2, c1, c0){
            this.c3 = c3;
            this.c2 = c2;
            this.c1 = c1;
            this.c0 = c0;
            this.parent = document.querySelector('.colors .color__container');

        }

        render(){
            const elem = document.createElement('div');
            elem.innerHTML = `
                <div class="item">
                    <div class="palete">
                        <div class="place c3" style="background-color: ${this.c3};"><span class="copy">${this.c3}</span></div>
                        <div class="place c2" style="background-color: ${this.c2};"><span class="copy">${this.c2}</span></div>
                        <div class="place c1" style="background-color: ${this.c1};"><span class="copy">${this.c1}</span></div>
                        <div class="place c0" style="background-color: ${this.c0};"><span class="copy">${this.c0}</span></div>
                    </div>
                </div>

            `;

            this.parent.append(elem);
        }

    }

    new PaleteCard(
        '#1a3c40',
        '#346c72',
        '#5e4fe2',
        '#27b389'
    ).render();

    new PaleteCard(
        '#EDE6DB',
        '#417D7A',
        '#1D5C63',
        '#1A3C40'
    ).render();

    new PaleteCard(
        '#E9D5DA',
        '#827397',
        '#4D4C7D',
        '#363062'
    ).render();

    new PaleteCard(
        '#001E6C',
        '#035397',
        '#E8630A',
        '#FCD900'
    ).render();

    new PaleteCard(
        '#40DFEF',
        '#B9F8D3',
        '#FFFBE7',
        '#E78EA9'
    ).render();

    
    // get data from input
    const addform = document.querySelector('form');

    addform.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('click');
        const a = document.querySelector('.ic1').value;
        const b = document.querySelector('.ic2').value;
        const c = document.querySelector('.ic3').value;
        const d = document.querySelector('.ic4').value;
        
        addform.reset();

        let arr = JSON.parse(localStorage.getItem("PaleteCard")); //to obj

        if(arr){
            arr.push([a, b, c, d]);
        }
        else{
            arr = [[a, b, c, d]];
            
        }

        localStorage.setItem("PaleteCard", JSON.stringify(arr)); //to string

        new PaleteCard(
            a,b,c,d
        ).render();
    });

    let arr = JSON.parse(localStorage.getItem("PaleteCard"));
    console.log(arr);

    arr.forEach(item => {
        new PaleteCard(item[0], item[1], item[2], item[3]).render();
    });

    const copy = document.querySelector('copy');

    copy.addEventListener('click', () =>{
        console.log('asd');
        copy.document.execCommand("copy");
    }); 




});
             
