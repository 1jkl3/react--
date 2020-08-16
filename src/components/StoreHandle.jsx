import React, { Component } from 'react';

class StoreHandle extends Component {
    onAdd(){
        this.props.onStoreADD("梅花");
    }
    onDel(){
        this.props.onStoreDEL("梨花");
    }
    render() {
        return (
            <div>
                <button onClick={this.onAdd.bind(this)}>添加</button>
                <button onClick={this.onDel.bind(this)}>减少</button>
            </div>
        );
    }
}

export default StoreHandle;