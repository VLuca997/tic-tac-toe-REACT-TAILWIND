import { useState } from 'react';
import Cell from './components/Cell.jsx';
import '../../App.css';

const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [go, setGo] = useState('circle');
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState([]);
    const [circleWins, setCircleWins] = useState(0);
    const [crossWins, setCrossWins] = useState(0);
    const [isDraw, setIsDraw] = useState(false);

    const handleClick = (id) => {
        if (cells[id] || winner) return;

        const newCells = [...cells];
        newCells[id] = go;
        setCells(newCells);
        checkWinner(newCells);

        setGo(go === 'circle' ? 'cross' : 'circle'); 
    };

    const checkWinner = (cells) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                setWinner(cells[a]);
                setWinningLine(combination);
                if (cells[a] === 'circle') {
                    setCircleWins(circleWins + 1);
                } else {
                    setCrossWins(crossWins + 1);
                }
                return;
            }
        }

        if (!cells.includes(null)) {
            setIsDraw(true);
        }
    };

    const resetGame = () => {
        setCells(Array(9).fill(null));
        setGo('circle');
        setWinner(null);
        setWinningLine([]);
        setIsDraw(false);
    };

    const winnerGradientClass = winner === 'circle' ? 'from-blue-500 to-blue-700' : 'from-red-500 to-yellow-500 ';
    const circleWinsClass = circleWins > crossWins ? 'text-yellow-400 font-extrabold text-2xl' : 'text-blue-600';
    const crossWinsClass = crossWins > circleWins ? 'text-yellow-400 font-extrabold text-2xl' : 'text-red-600';

    return <>
        <div className=' my-10'>
            
            <div className="  flex justify-center items-center h-screen flex-col">
                <div className=' border-red-500  border-2 p-10 rounded-3xl  bg-zinc-700'>
                    <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center">#Tic Tac Toe!</h1>
                    <div className=''>
                    {winner && (
                                         <div className={` py-5 my-5 inset-0 flex flex-col justify-center items-center bg-gradient-to-b ${winnerGradientClass} rounded-3xl`}>
                                            <div className="text-[35px] py-5 px-0 m-0 font-extrabold text-white">
                                                Vince {winner === 'circle' ? 'Cerchio' : 'Croce'} 
                                            </div>
                                            <div className="text-xl mb-4">
                                                <span className={`text-${winner === 'circle' ? 'yellow-400 font-extrabold' : 'blue-600'}`}>Player Cerchio: {circleWins}</span> | <span className={`text-${winner === 'cross' ? 'yellow-400 font-extrabold' : 'red-600'}`}>Player Croce: {crossWins}</span>
                                            </div>
                                            <button
                                                className="my-4 p-2 bg-green-500 text-white rounded-2xl hover:bg-green-600 duration-300 transition-all easy-in-out"
                                                onClick={resetGame}
                                            >
                                                Gioca di nuovo
                                            </button>
                                        </div>
                                    )}
                        
                                    {isDraw && (
                                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-gray-500 to-gray-400 p-12">
                                            <div className="text-3xl p-5 font-bold text-white">
                                                PAREGGIO
                                            </div>
                                            <div className="text-xl mb-4">
                                                <span className="text-blue-600">Player Cerchio: {circleWins}</span> | <span className="text-red-600">Player Croce: {crossWins}</span>
                                            </div>
                                            <button
                                                className="mb-4 p-2 bg-blue-500 text-white rounded"
                                                onClick={resetGame}
                                            >
                                                Gioca di nuovo
                                            </button>
                                        </div>
                                    )}
                    </div>
                    <div className="text-xl mb-4">
                        <span className={circleWinsClass}>Player Cerchio: {circleWins}</span> | <span className={crossWinsClass}>Player Croce: {crossWins}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 relative">
                        {cells.map((cell, index) =>
                            <Cell
                                key={index}
                                id={index}
                                cell={cell}
                                onClick={() => handleClick(index)}
                                isWinningCell={winningLine.includes(index)}
                                />
                                )}
                    </div>
                </div>
                   
            </div>
        </div>
    </>;
};

export default TicTacToe;
