import "./style.css"


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = '...'

    btn.innerHTML = 'Click!';
    btn.onclick = () => console.log("clicked");

    element.appendChild(btn);

    return element;
}

  document.body.appendChild(component());




  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function() {
      clearInterval(timer);
    });
  }