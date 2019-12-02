import React from "react";
// компоненты всегда называй в PascalCase иначе реакт будет думать, что это html тэг
// всегда импорти реакт
// 
class FirstComponent extends React.Component {
  updateState() {
    console.log("hello");
  }

  render() {
    return <h1 onClick={this.updateState}>Привет, уроды</h1>;
  }
}
// всегда экспортируй свой компонент
export default FirstComponent;
