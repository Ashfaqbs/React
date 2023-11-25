
function customRender(reactElement, mainContainer)
{

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=(reactElement.children);
    domElement.setAttribute('target',reactElement.props.target)
    domElement.setAttribute('href',reactElement.props.href)

    mainContainer.appendChild(domElement)
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: ' https"//google.com',
    target: "_blank",
  },
  children: "Click me to visit Google",
};

customRender(reactElement,mainContainer);
//Notes 
// So React done understand this <a href='https://google.com' target="_blank">Click me to visit Google <a/>
// and it converts it like above reactElement and understands it and process it and renders it  and this is done by bundler like babel , Vite