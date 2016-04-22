import React from 'react';

class Title extends React.Component {
    render (){
        const text = this.props.text;
        const subtitle = this.props.subtitle;
        console.log("THIS", this);
        return (
            <div>
                <div> {text} </div>
                <div> {subtitle} </div>
            </div>
        );
    }
}

export default Title;
