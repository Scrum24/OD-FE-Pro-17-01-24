createCustomList();

function createCustomList(){
    setTimeout(()=>{

    const userArray = getArray();
    const list = generateList(userArray);

    const main = document.getElementsByTagName('main')[0];
    main.appendChild(list);

    },1000);
}

function getArray(){
    const userStrArray = window.prompt('Hi. Please, enter your array. Or use default one..', '[1,2,[1,2,3],3,[1,2,3,["a","b","c"]],4,5,[1,2,3,["a","b","c"]]]');
    return JSON.parse(userStrArray);
}

function generateList(array, prefix = ''){
    const ul = document.createElement('ul');

    let subarrayNumber = 1;
    for (const arrEl of array) {
        const li = document.createElement('li');
        let liEl = `${prefix}${arrEl}`;

        if(arrEl instanceof Array){
            const nextLevelPrefix = `${subarrayNumber}.${prefix}`;
            liEl = generateList(arrEl, nextLevelPrefix).outerHTML;
            subarrayNumber++;
        }

        li.innerHTML = liEl;
        ul.appendChild(li);
    }

    return ul;
}