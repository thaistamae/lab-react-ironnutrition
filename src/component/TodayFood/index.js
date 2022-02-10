import React from 'react';

export function TodayFood(){
    const foodlist = [];

    function addTodayFood(){
        return foodlist.push(<li>`${}`</li>)
    } 
    

    return (
    <div style={{paddingLeft: 40}}>
        <h1 style={{fontSize: 40}}> Today's foods</h1>
        <ul>

        </ul>
    </div>
    )
}