//import '../assets/css/style.css';



//dan 1
console.log('Hello by js');
console.log('hello World!');


const app = document.getElementById('app');
app.innerHTML = '<p>Hello to BootcampPizza by JavaScript Basics</p>';
//-------------------------------------------------------------------------
console.log(app);
const social = document.getElementById('social');

social.innerHTML = '<a href="https//www.facebook.com" target="_blank"> <img class="social-icon" src="assets/images/fb_ico.png"/></a>'
social.innerHTML += '<a href="https//www.youtube.com" target="_blank"> <img class="social-icon" src="assets/images/icons8-youtube-squared-100.png"/></a>'
social.innerHTML += '<a href="https//www.instagram.com/dantenero93" target="_blank"> <img class="social-icon" src="assets/images/icons8-instagram-128.png"/></a>'
social.innerHTML += '<a href="https//www.twitter.com/" target="_blank"> <img class="social-icon" src="assets/images/icons8-twitter-128.png"/></a>'
{
    console.log('dobar dan!');
    var variable = 'Dobar dan iz varijable!';
    console.log(variable);
    var variable2 = 'Dodatak poruke';
    console.log(variable + variable2);
    var number1 = 5;
    var number2 = 0;
    var number3 = number1 / number2;
    console.log('To ' + number3 + ' and beyond');
    number1 = 15;
    number2 = 10;
    number3 = 2;
    console.log((number1 + number2) * number3);
    const constant = 5;
    console.log(constant);
    //constant=6;, //u komandi const ne moze se menjati vrednost
}
//console.log(constant); ne moze!

//let se moze koristiti kao lokalna promenljiva, moze se koristiti od spolja ka unutra
{
    var a = 12;
    let b = 5;
    console.log(a);
    console.log(b);
}
console.log(a);
//let=b15; //ako imamo let spolja onda je naredna linija OK, u suprotnom nije OK!
//console.log(b);
/*{
    //S1
    let b;
    b = 10
    console.log(b);


    {
        //S2
        let b;
        b = 15;
        console.log(b);
        let c;
        c = 8;
        console.log(c);


        {
            //S1

            let d = 9;
            d = 21;
            console.log(d);

        }
    }
}

{
    let a;
    a = 10;

    {
        let b;
        var c;
        b = 10

    }



    {
        //b=15;

    }
}*/
//=============================================================================
{
    let a;

    console.log(a);
    {
        let b;
        //a = 11; ne!
        b = 32;
console.log(d);
console.log(a);
console.log(b);
    }
    //b = 15; //deklaracija ne cita definiciju van svog skoupa
    a = 10; // deklaracija cita definiciju ako je kucana posle otvorenog i zatvorenog skoupa
    //let c; ne moze
    console.log(a);
    
    {
        let c;
        c = 12;
        
        //console.log(a); ne moze
        d = 20;
        //console.log(b); ne!
        console.log(c); // cita samo u svom skoupu
    }
    //console.log(c); nije definisan, ne cita unutar skoupa
    let d;
    console.log(d);
    a=16;
    //console.log(a); ne moze
    //console.log(b); ne cita unutar drugog skoupa
}