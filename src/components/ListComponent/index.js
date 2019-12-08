import React from "react";
import RenderList from "../RenderList";
import Form from "../FormComponent";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  getlist = () => {
    console.log("sadfsdaf");
    fetch("http://api.localhost/get_items")
      .then(response => response.json())
      .then(
        jsonData => {
          this.setState({
            isLoaded: true,
            items: jsonData
          });
        },
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  };

  componentDidMount() {
    this.getlist();
  }

  delete = id => {
    console.log("Delete", id);
    var url = "http://api.localhost/delete_item/" + id;
    fetch(url);
    const { items } = this.state;
    this.setState({
      items: items.filter((item, i) => {
        return item.id !== id;
      })
    });
  };

  update = comps => {
    console.log("Update", comps);
    var url =
      "http://api.localhost/update_item/" +
      comps.name +
      "/" +
      comps.type +
      "/" +
      comps.count +
      "/" +
      comps.price;
    fetch(url);
  };
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загружаем...</div>;
    } else {
      return (
        <div>
          <Form update={this.update} />
          <table className={"table table-hover"}>
            <thead>
              <Zagolovki />
            </thead>
            <tbody>
              <RenderList items={this.state.items} deleteItem={this.delete} />
            </tbody>
          </table>
        </div>
      );
    }
  }
}

const Zagolovki = () => {
  return (
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Type</th>
      <th>Count</th>
      <th>Price</th>
      <th>#</th>
    </tr>
  );
};

export default ListComponent;

//
// const SimpleList = names => (
//     <ul>
//       {['a', 'b', 'c'].map(function(names) {
//         return <li key={names.id}>{names}</li>;
//       })}
//     </ul>
//   );
