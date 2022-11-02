// import salaryOperations from "./module";
window.addEventListener('load',bindEvents);

function bindEvents(){
    document.getElementById('compute').addEventListener('click',calculateAllowances);
}

function calculateAllowances(){
    var basicSalaryvalue=parseInt(document.getElementById('basicSalary').value);
    salaryOperations.basicSalary=basicSalaryvalue;
    console.log(salaryOperations.basicSalary);


    for (const key in salaryOperations) {
        if(key==='basicSalary'){
            continue;
        }

        const pTag=createPtag(key.toUpperCase(),salaryOperations[key]());
        document.getElementById('output').appendChild(pTag);
    }

    // console.log(salaryOperations.tax());
    // const pTag=createPtag('HRA',salaryOperations.hra());
    // document.getElementById('output').appendChild(pTag);

    // const pTag1=createPtag('DA',salaryOperations.da());
    // document.getElementById('output').appendChild(pTag1);

    // const pTag2=createPtag('TAX',salaryOperations.tax());
    // document.getElementById('output').appendChild(pTag2);


}

function createPtag(lable,value){
    const pTag=document.createElement('p');
    pTag.innerText= `${lable} is ${value}`;
    return pTag;
}