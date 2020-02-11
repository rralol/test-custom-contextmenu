import React from "react";

export default class ContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.selectedItem,
      visible: this.props.visible,
      x: this.props.x,
      y: this.props.y
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.props.setMenuInvisible);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.props.setMenuInvisible);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        item: this.props.selectedItem,
        visible: this.props.visible,
        x: this.props.x,
        y: this.props.y
      });
    }
  }

  render() {
    const style = {
      position: "fixed",
      top: `${this.state.y - 10}px`,
      left: `${this.state.x - 10}px`,
      backgroundColor: "rgb(200,200,200)"
    };
    return (
      (this.state.visible || null) && (
        <div style={style}>
          <a
            href={this.state.item.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref => (this.menuOption = ref)}
          >
            Öppna i CRM
          </a>
        </div>
      )
    );
  }
}
