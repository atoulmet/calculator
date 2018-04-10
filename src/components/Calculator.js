import React, { Component } from 'react';

import Button from './Button';
import Operation from './Operation';
import Result from './Result';
import Mode from './Mode';

class Calculator extends Component {

    render() {
        return (
            <div className='calculator'>
                <div className='screen'>
                    <Mode />
                    <Operation />
                    <Result />
                </div>

                <div className='row'>
                    <Button value={'C'} class={'clear button'}/>
                    <Button value={'='} class={'equal button'}/>                
                </div>

                <div className='row'>
                    <Button value={'7'} class={'number button'}/>
                    <Button value={'8'} class={'number button'}/>
                    <Button value={'9'} class={'number button'}/>
                    <Button value={'/'} class={'divide button'}/>
                </div>

                <div className='row'>
                    <Button value={'4'} class={'number button'}/>
                    <Button value={'5'} class={'number button'}/>
                    <Button value={'6'} class={'number button'}/>
                    <Button value={'*'} class={'multiply button'}/>
                </div>

                <div className='row'>
                    <Button value={'1'} class={'number button'}/>
                    <Button value={'2'} class={'number button'}/>
                    <Button value={'3'} class={'number button'}/>
                    <Button value={'-'} class={'minus button'}/>
                </div>

                <div className='row'>
                    <Button value={'0'} class={'number bottom button'}/>
                    <Button value={'.'} class={'number bottom button'}/>
                    <Button value={'+'} class={'plus button'}/>
                </div>
            </div>
        )}
    }

export default Calculator;