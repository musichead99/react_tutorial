import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

// class Square extends React.Component {
//     render() {
//         return (
//             <button 
//             className="square"
//             onClick={() => this.props.onClick()}
//             >
//             {this.props.value}
//             </button>
//         );
//         }
// }

function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props); // 하위 클래스의 생성자를 작성할 때 항상 super(props)를 작성해 주어야 함
        this.state = {
            squares : Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); // slice()를 통해 배열의 사본 작성
        squares[i] = 'X';
        this.setState({squares : squares});
    }

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }
        
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
            </div>
        );
        }
    } 
    
  // ========================================

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Game />);
