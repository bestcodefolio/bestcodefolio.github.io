let left = document.getElementById('left-input-place');
let right = document.getElementById('right-input-place');

document.getElementById('exchange').onclick = function(){
    let buff = left.value;
    left.value = right.value;
    right.value = buff;

    let selectleft = document.getElementById('selectGeneral');
    let selectrigth = document.getElementById('selectGeneral-rigth');
    var x = selectrigth.value;

    for (let i=0; i < selectrigth.length; i++) {
        if (selectrigth[i].value === selectleft.value){
            selectrigth.selectedIndex = i;
            break;
        }
    }
    for (let i=0; i < selectleft.length; i++) {
        if (selectleft[i].value === x){
            selectleft.selectedIndex = i;
            break;
        }
    }
}

var buttons = document.getElementsByTagName('button');
/* console.log(buttons); */
var selectGeneral = document.getElementById('selectGeneral');

var selectGeneralrigth = document.getElementById('selectGeneral-rigth');
/* console.log(selectGeneral); */

selectGeneral.onchange = function(){
    clean();
}
selectGeneralrigth.onchange = function(){
    clean();
}

/* Clean input data */
function clean(){
    left.value = "";
    right.value = "";
}

/* Button clicks
*
*/

buttons[1].onclick = function(){
    selectGeneral.selectedIndex = 0;
    selectGeneralrigth.selectedIndex = 0;
    clean();
};

buttons[2].onclick = function(){
    selectGeneral.selectedIndex = 0;
    selectGeneralrigth.selectedIndex = 2;
    clean();
};

buttons[3].onclick = function(){
    selectGeneral.selectedIndex = 2;
    selectGeneralrigth.selectedIndex = 0;
    clean();
};

buttons[4].onclick = function(){
    selectGeneral.selectedIndex = 6;
    selectGeneralrigth.selectedIndex = 1;
    clean();
};

buttons[5].onclick = function(){
    selectGeneral.selectedIndex = 6;
    selectGeneralrigth.selectedIndex = 0;
    clean();
};

buttons[6].onclick = function(){
    selectGeneral.selectedIndex = 6;
    selectGeneralrigth.selectedIndex = 5;
    clean();
};

buttons[7].onclick = function(){
    selectGeneral.selectedIndex = 7;
    selectGeneralrigth.selectedIndex = 6;
    clean();
};

buttons[8].onclick = function(){
    selectGeneral.selectedIndex = 8;
    selectGeneralrigth.selectedIndex = 1;
    clean();
};

buttons[9].onclick = function(){
    selectGeneral.selectedIndex = 5;
    selectGeneralrigth.selectedIndex = 1;
    clean();
};

/* Button clicks
*
*/

left.oninput = function Convert(){
    var dataValue = left,
    amount = right;

    var XHR = new XMLHttpRequest();

    var url = 
        'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,ETH,LTC,USDT,RUB,JPY,BYN',
    urlETH = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,BTC,LTC,USDT,RUB,JPY,BYN',
    urlUSD = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH,EUR,BTC,LTC,USDT,RUB,JPY,BYN',
    urlEUR = 'https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=ETH,USD,BTC,LTC,USDT,RUB,JPY,BYN',
    urlRUB = 'https://min-api.cryptocompare.com/data/price?fsym=RUB&tsyms=ETH,USD,BTC,LTC,USDT,EUR,JPY,BYN',
    urlLTC = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=ETH,USD,BTC,RUB,USDT,EUR,JPY,BYN',
    urlUSDT = 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=ETH,USD,BTC,LTC,RUB,EUR,JPY,BYN',
    urlBYN = 'https://min-api.cryptocompare.com/data/price?fsym=BYN&tsyms=ETH,USD,BTC,LTC,RUB,EUR,JPY,USDT';
    /* BTC convert 
    *
    *    
    */
    if(selectGeneral.value  == "BTC" && selectGeneralrigth.value == "BTC"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "BTC" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "BTC"){
        ToUsd(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "ETH" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "ETH"){
        ToETH(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "LTC" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "LTC"){
        ToLTC(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "RUB" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "RUB"){
        ToRUB(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "EUR" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "EUR"){
        ToEUR(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "USDT"){
        ToUSDT(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, url, XHR, "BTC");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "BTC" ||
    selectGeneral.value == "BTC" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, url, XHR, "BTC");
    }

    /* BTC convert 
    *
    *    
    */

    /* ETH convert 
    *
    *    
    */

    if(selectGeneral.value == "ETH" && selectGeneralrigth.value == "ETH"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "ETH" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "ETH"){
        ToUsd(dataValue, amount, urlETH, XHR, "ETH");
    }

    if(selectGeneral.value == "LTC" && selectGeneralrigth.value == "ETH" ||
    selectGeneral.value == "ETH" && selectGeneralrigth.value == "LTC"){
        ToLTC(dataValue, amount, urlETH, XHR, "ETH");
    }

    if(selectGeneral.value == "RUB" && selectGeneralrigth.value == "ETH" ||
    selectGeneral.value == "ETH" && selectGeneralrigth.value == "RUB"){
        ToRUB(dataValue, amount, urlETH, XHR, "ETH");
    }

    if(selectGeneral.value == "EUR" && selectGeneralrigth.value == "ETH" ||
    selectGeneral.value == "ETH" && selectGeneralrigth.value == "EUR"){
        ToEUR(dataValue, amount, urlETH, XHR, "ETH");
    }

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "ETH" ||
    selectGeneral.value == "ETH" && selectGeneralrigth.value == "USDT"){
        ToUSDT(dataValue, amount, urlETH, XHR, "ETH");
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "ETH" ||
    selectGeneral.value == "ETH" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, urlETH, XHR, "ETH");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "ETH" ||
    selectGeneral.value == "ETH" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlETH, XHR, "ETH");
    }

    /* ETH convert 
    *
    *    
    */
    
    /* USD convert 
    *
    *    
    */

    if(selectGeneral.value == "USD" && selectGeneralrigth.value == "USD"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "LTC" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "LTC"){
        ToLTC(dataValue, amount, urlUSD, XHR, "USD");
    }

    if(selectGeneral.value == "RUB" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "RUB"){
        ToRUB(dataValue, amount, urlUSD, XHR, "USD");
    }

    if(selectGeneral.value == "EUR" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "EUR"){
        ToEUR(dataValue, amount, urlUSD, XHR, "USD");
    }

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "USDT"){
        ToUSDT(dataValue, amount, urlUSD, XHR, "USD");
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, urlUSD, XHR, "USD");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "USD" ||
    selectGeneral.value == "USD" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlUSD, XHR, "USD");
    }

    /* USD convert 
    *
    *    
    */
    /* EUR convert 
    *
    *    
    */

    if(selectGeneral.value == "EUR" && selectGeneralrigth.value == "EUR"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "LTC" && selectGeneralrigth.value == "EUR" ||
    selectGeneral.value == "EUR" && selectGeneralrigth.value == "LTC"){
        ToLTC(dataValue, amount, urlEUR, XHR, "EUR");
    }

    if(selectGeneral.value == "RUB" && selectGeneralrigth.value == "EUR" ||
    selectGeneral.value == "EUR" && selectGeneralrigth.value == "RUB"){
        ToRUB(dataValue, amount, urlEUR, XHR, "EUR");
    }

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "EUR" ||
    selectGeneral.value == "EUR" && selectGeneralrigth.value == "USDT"){
        ToUSDT(dataValue, amount, urlEUR, XHR, "EUR");
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "EUR" ||
    selectGeneral.value == "EUR" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, urlEUR, XHR, "EUR");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "EUR" ||
    selectGeneral.value == "EUR" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlEUR, XHR, "EUR");
    }

    /* EUR convert 
    *
    *    
    */
    /* RUB convert 
    *
    *    
    */

    if(selectGeneral.value == "RUB" && selectGeneralrigth.value == "RUB"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "LTC" && selectGeneralrigth.value == "RUB" ||
    selectGeneral.value == "RUB" && selectGeneralrigth.value == "LTC"){
        ToLTC(dataValue, amount, urlRUB, XHR, "RUB");
    }

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "RUB" ||
    selectGeneral.value == "RUB" && selectGeneralrigth.value == "USDT"){
        ToUSDT(dataValue, amount, urlRUB, XHR, "RUB");
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "RUB" ||
    selectGeneral.value == "RUB" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, urlRUB, XHR, "RUB");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "RUB" ||
    selectGeneral.value == "RUB" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlRUB, XHR, "RUB");
    }

    /* RUB convert 
    *
    *    
    */
    /* LTC convert 
    *
    *    
    */

    if(selectGeneral.value == "LTC" && selectGeneralrigth.value == "LTC"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "LTC" ||
    selectGeneral.value == "LTC" && selectGeneralrigth.value == "USDT"){
        ToUSDT(dataValue, amount, urlLTC, XHR, "LTC");
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "LTC" ||
    selectGeneral.value == "LTC" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, urlLTC, XHR, "LTC");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "LTC" ||
    selectGeneral.value == "LTC" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlLTC, XHR, "LTC");
    }

    /* LTC convert 
    *
    *    
    */

    /* USDT convert 
    *
    *    
    */

    if(selectGeneral.value == "USDT" && selectGeneralrigth.value == "USDT"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "USDT" ||
    selectGeneral.value == "USDT" && selectGeneralrigth.value == "BYN"){
        ToBYN(dataValue, amount, urlUSDTC, XHR, "USDT");
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "USDT" ||
    selectGeneral.value == "USDT" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlUSDT, XHR, "USDT");
    }

    /* USDT convert 
    *
    *    
    */
    /* BYN convert 
    *
    *    
    */

    if(selectGeneral.value == "BYN" && selectGeneralrigth.value == "BYN"){
        amount.value = dataValue.value;
    }

    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "BYN" ||
    selectGeneral.value == "BYN" && selectGeneralrigth.value == "JPY"){
        ToJPY(dataValue, amount, urlBYN, XHR, "BYN");
    }

    /* BYN convert 
    *
    *    
    */
    if(selectGeneral.value == "JPY" && selectGeneralrigth.value == "JPY"){
    amount.value = dataValue.value;
}
}

function ToUsd(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);
            let USD_amount;
            if (flag == true){ 
                USD_amount = dataValue.value * data.USD;
            }else{
                USD_amount = dataValue.value / data.USD;
            }
            let final_value = USD_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToETH(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /*console.log(data);*/
            let ETH_amount;
            if (flag == true){ 
                ETH_amount = dataValue.value * data.ETH;
            }else{
                ETH_amount = dataValue.value / data.ETH;
            }
            let final_value = ETH_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToLTC(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /*console.log(data);*/
            let LTC_amount;
            if (flag == true){ 
                LTC_amount = dataValue.value * data.LTC;
            }else{
                LTC_amount = dataValue.value / data.LTC;
            }
            let final_value = LTC_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToRUB(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /*console.log(data);*/
            let RUB_amount;
            if (flag == true){ 
                RUB_amount = dataValue.value * data.RUB;
            }else{
                RUB_amount = dataValue.value / data.RUB;
            }
            let final_value = RUB_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToEUR(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /* console.log(data); */
            let EUR_amount;

            if (flag == true){ 
                EUR_amount = dataValue.value * data.EUR;
            }else{
                EUR_amount = dataValue.value / data.EUR;
            }
            let final_value = EUR_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToUSDT(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /* console.log(data); */
            let USDT_amount;

            if (flag == true){ 
                USDT_amount = dataValue.value * data.USDT;
            }else{
                USDT_amount = dataValue.value / data.USDT;
            }
            let final_value = USDT_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToBYN(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /* console.log(data); */
            let BYN_amount;

            if (flag == true){ 
                BYN_amount = dataValue.value * data.BYN;
            }else{
                BYN_amount = dataValue.value / data.BYN;
            }
            let final_value = BYN_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}

function ToJPY(dataValue, amount, url, XHR, cur){
    var flag = false;
    if (selectGeneral.value == cur){
        flag = true;
    }

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText);

            /* console.log(data); */
            let JPY_amount;

            if (flag == true){ 
                JPY_amount = dataValue.value * data.JPY;
            }else{
                JPY_amount = dataValue.value / data.JPY;
            }
            let final_value = JPY_amount.toFixed(3);
            amount.value = final_value;
        }
    }

    XHR.open('GET', url);
    XHR.send();
}


