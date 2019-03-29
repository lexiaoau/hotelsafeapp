import React from 'react';
import './Board.scss';
import Square from './Square';  

const Board = (props) => {
    return(
        <div className="board">
            <div className="firstRow">
                {/** ?? any way to get value rather than hard code? */}
                <Square value="1" onClick={() => props.onaddnumber("1")} /> 
                <Square value="2" onClick={() => props.onaddnumber("2")} />
                <Square value="3" onClick={() => props.onaddnumber("3")} />          
            </div>
            <div className="secondRow">
                <Square value="4" onClick={() => props.onaddnumber("4")} />
                <Square value="5" onClick={() => props.onaddnumber("5")} />
                <Square value="6" onClick={() => props.onaddnumber("6")} /> 
            </div>
            <div className="thirdRow">
                <Square value="7" onClick={() => props.onaddnumber("7")} />
                <Square value="8" onClick={() => props.onaddnumber("8")} />
                <Square value="9" onClick={() => props.onaddnumber("9")} /> 
            </div>
            <div className="fourthRow">
                <Square value="CLR" onClick={props.onpinclear} />
                <Square value="0" onClick={() => props.onaddnumber("0")} />
                <Square value="ENTER" onClick={props.onlockchange} /> 
            </div>        
        </div>    
    );
}

export default Board;