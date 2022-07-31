document.getElementsByTagName("body")[0].addEventListener('keydown',(e)=>{
    if(e.key === "Insert"){
        identifyInput(document.body)
    }
})
// https://crud-api-users.herokuapp.com/users/translate
async function identifyInput(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(ele=>identifyInput(ele));
    }
    else if(element.nodeType === Element.ELEMENT_NODE){
        if(element.tagName === "INPUT" && element.type === "text" && element === document.activeElement){
            let val = element.value;
            await fetch("https://crud-api-users.herokuapp.com/users/translate/"+val)
            .then(response =>response.json())
            .then(data=>val=data.m)
            element.value=val;
        }else if(element.tagName === "TEXTAREA"){

        }
    }
}