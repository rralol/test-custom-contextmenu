import React from "react";
import EntityList from "./entitiylist";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: [
        { name: "test0", id: 1, url: "URLtest0" },
        { name: "test1", id: 2, url: "URLtest1" },
        { name: "test2", id: 3, url: "URLtest2" }
      ],
      list2: [
        { name: "test3", id: 4, url: "URLtest3" },
        { name: "test4", id: 5, url: "URLtest4" },
        { name: "test5", id: 6, url: "URLtest5" }
      ]
    };
  }

  render() {
    return (
      <div>
        <EntityList items={this.state.list1} />
        <EntityList items={this.state.list2} />
      </div>
    );
  }
}
