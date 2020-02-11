import React from "react";
import ContextMenu from "./contextmenu";

export default class EntityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: this.props.items,
          selectedItem: false,
          contextMenuVisible: false,
          x: 0,
          y: 0
        };
        this._setContextMenuInvisible = this._setContextMenuInvisible.bind(this)
        this._handleRightClick = this._handleRightClick.bind(this)
      }
      componentDidMount() {
        document.addEventListener('contextmenu', this._handleRightClick)
      }

      componentWillUnmount() {
        document.removeEventListener("contextmenu", this._handleRightClick);
      }

      _handleRightClick(event) {
        if(this.root) {
          if(!(this.root.contains(event.target)) && this.state.contextMenuVisible) {
            this._setContextMenuInvisible();
          }
        }
      }

      _setContextMenuInvisible() {
        this.setState({
          contextMenuVisible: false
        });
      }
    
      render() {
        return (
          <ul ref={ref => (this.root = ref)}>
            {this.state.items.map(item => {
              const _setContextMenuVisible = event => {
                  event.preventDefault();
                  this.setState({
                      x: event.clientX,
                      y: event.clientY,
                      selectedItem: item,
                      contextMenuVisible: true
                  });
                return false;
              };
              const _test = e => {
                e.preventDefault();
                console.log("Clicked")
              };
              return (
                <li
                  key={item.id}
                  onClick={_test}
                  onContextMenu={_setContextMenuVisible}
                >
                  <p>{item.name}</p>
                </li>
              );
            })}
            <ContextMenu
              x = {this.state.x}
              y = {this.state.y}
              selectedItem = {this.state.selectedItem}
              visible={this.state.contextMenuVisible}
              setMenuInvisible={this._setContextMenuInvisible}
            />
          </ul>
        );
      }
}