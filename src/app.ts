import Image from "./components/Image";
import SignUp from "./components/SignUp";
import NavHeader from "./components/NavHeader";

const App = (): Node => {
  const template = document.createElement("template");
  template.innerHTML = `
      <div class="app">
        ${NavHeader()}
        <div class="row">
            ${Image()}
            ${SignUp()}
        </div>
      </div>
    `;
  // Return a new node from template
  return template.content.cloneNode(true);
};

export default App;
