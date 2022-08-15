
// var GroceryList = () => {
//   return (<div>
//       <h2>My grocery list</h2>
//       <GroceryListItem grocery={['Milk', 'Eggs', 'Cereal']}/>
//   </div>)
// };

// var Grocery = () => {
//   return (<div>
//       <h2>My grocery list</h2>
//       <GroceryList groceries={['Milk, Eggs, Cereal']}/>
//   </div>)
// };

class Grocery extends React.Component {
  render() {
    return (
      <div>
        <h2>My grocery list</h2>
        <GroceryList groceries={['Milk', 'Eggs', 'Cereal']}/>
      </div>
    )
  }
}

// var GroceryListItem = (props) => {
//   var groceryClick = (event) => {
//     console.log('I got clicked!');
//     // console.log(event);
//     //Event argument not used
//   }
//   return <ul>
//     <li onClick={groceryClick}>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//     <li>{props.grocery[2]}</li>
//   </ul>
// };

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
      {this.props.groceries.map(grocery =>
        <GroceryListItem grocery={grocery} />
      )}
    </ul>
    )
  }
}

// var GroceryList = (props) => {
//   return (
//     <ul>
//       {props.groceries.map(grocery =>
//         <GroceryListItem grocery={grocery} />
//       )}
//     </ul>
//   )
// };

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  // onGroceryClick() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }
  onMouseOver() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    // var style = {
    //   textDecoration: this.state.done ? 'line-through' : 'none'
    // };
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal',
      fontSize: this.state.hover ? '40px' : '15px'
    }

    return (
      // <li style={style} onClick={this.onGroceryClick.bind(this)}>{this.props.grocery}</li>
      <li style={style} onMouseOver={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.grocery}</li>
    )
  }
}

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     )
//   }
// }

ReactDOM.render(<Grocery />, document.getElementById('app'));