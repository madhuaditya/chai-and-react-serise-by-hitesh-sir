// function  customRender(reactElemnt , container){
//     const
// }


const reactElement = {
    type:'a',
    props: {
        href : 'https/google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer =document.querySelector("#root");

customRender(reactElement , mainContainer)