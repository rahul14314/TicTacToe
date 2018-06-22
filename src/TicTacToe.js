import React, {Component} from 'react';
import "./bootstrap.css";

// var list = [1, 2, 3, 4];
// var list2 = list.map(function(v, i){
//   return v*v
// })
// console.log(list2)

// var color = (...)? "red" : "blue";


// console.log( eval("3 + 4 * 5")  )


class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "X",
      board: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    }
  }
  handleClick(btnIndex) {
    var cp = this.state.currentPlayer;
    var b = this.state.board;
    if (b[btnIndex] === "-") {
      b[btnIndex] = cp;
      if (cp === "X") {
        cp = "O";
      } else {
        cp = "X";
      }
      this.setState({
        board: b,
        currentPlayer: cp
      });
      this.analyze();
    }
  }
  analyze() {
    console.log("ANALYZE")
    var b = this.state.board;
    if (b[0]===b[1] && b[1]===b[2] && b[1] !== "-") 
    {
      alert(b[1] + " has won")
    }
    else if (b[3] === b[4] && b[4] === b[5] && b[4] !== "-") {
      alert(b[1] + " has won")
    }
    else if (b[6] === b[7] && b[7] === b[8] && b[8] !== "-") {
      alert(b[1] + " has won")
    }
    else if (b[0] === b[3] && b[3] === b[6] && b[0] !== "-") {
      alert(b[1] + " has won")
    }
    else if (b[1] === b[4] && b[4] === b[7] && b[1] !== "-") {
      alert(b[1] + " has won")
    }
    else if (b[2] === b[5] && b[5] === b[8] && b[8] !== "-") {
      alert(b[1] + " has won")
    }
    else if (b[0] === b[4] && b[4] === b[8] && b[8] !== "-") {
      alert(b[1] + " has won")
    }
    else if(b[2] === b[4] && b[4] === b[6] && b[2] !== "-") {
      alert(b[1] + " has won")
    }
    else if (b[0] !== "-" && b[1] !== "-" && b[2] !== "-" && b[3] !== "-" && b[4] !== "-" && b[5] !== "-" && b[6] !== "-" && b[7] !== "-" && b[8] !== "-")
    {
      alert("DRAW")
    }
    // TODO More conditions
  }
  render(){
    return(
      <div class = "container">
        <h2 class = "text-center mt-4 text-primary">TicTacToe</h2>
        {
          this.state.board.map(function(v, i) {
            return (            
                <span key={i}>
                  {
                    (i % 3 === 0) ? <br /> : null
                  }
                  <button style={{width:50}} class = "btn btn-dark m-1 " onClick={() => { this.handleClick(i) }}>
                    {v}
                  </button>
                </span>
            );
          }, this)
        }
      </div>
    )
  }
}

export default TicTacToe;









