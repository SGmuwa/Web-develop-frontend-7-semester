import React from "react";
import RenderList from "../RenderList";
import Form from "../FormComponent";

const url = "http://api.localhost/";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    setTimeout(this.onTimeUpdate, 2000);
  }

  onTimeUpdate = () => {
    if (this.notNeedExit) {
      this.getList();
      setTimeout(this.onTimeUpdate, 500);
    }
  };

  notNeedExit = true;

  getList = () => {
    fetch(url)
      .then(response => response.json())
      .then(
        jsonData => {
          console.log("Get", jsonData);
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
    this.getList();
  }

  delete = id => {
    console.log("Delete", id);
    fetch(url + id, { method: "DELETE" });
    const { items } = this.state;
    this.setState({
      items: items.filter((item, i) => {
        return item.id !== id;
      })
    });
  };

  put = comps => {
    console.log("Put", comps);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({ ...comps }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => this.getList());
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
          <Form update={this.put} />
          <table className={"table table-hover"}>
            <thead>
              <TableHeaders />
            </thead>
            <tbody>
              <RenderList items={items} deleteItem={this.delete} />
            </tbody>
          </table>
        </div>
      );
    }
  }
}

const TableHeaders = () => {
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
