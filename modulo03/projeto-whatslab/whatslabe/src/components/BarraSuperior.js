import React from 'react';
import Styled from 'styled-components'

const EstiloTopo = Styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    color: white;
    background-color: #1C1C1C;
    width: 100%;
    height: 70px;
    

    .zap{
        margin: 10px;
        width: 35px;
        height: 35px;
        cursor: pointer;
        
    }
    
    .cam{
        width: 50px;
        height: 40px;
        cursor: pointer;
    }

    .fone{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    
    .pontos{
        width: 3px;
        height: 3px;
        background-color: white;
        margin: 5px;
        border-radius: 100%;
        cursor: pointer;
    }
    .linha{
        width: 1px;
        height: 30px;
        background-color: white;
    }

    .trespontos{
        display: flex;
        flex-direction: row;
        cursor: pointer;
        
    }

    .divMenosZap{
        display:flex;
        justify-content: space-around;
        width: 50%;
        align-items: center;
    }
`
const TopoEstilo =()=>{
    return(
        <EstiloTopo>
           <img className="zap" src="/img/zap.png"/>
           <div className="divMenosZap">
           <img className="cam" src="/img/cam.png"/>
           <img className="fone" src="/img/fone.png"/>
            <div className="linha"></div>
           <img className="fone" src="/img/lupa.png"/>
           <div className="trespontos">
           <div className="pontos"></div>
           <div className="pontos"></div>
           <div className="pontos"></div>
           </div>
           </div>
        </EstiloTopo>
    )
}

export default TopoEstilo