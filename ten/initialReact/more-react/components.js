import React from 'react';
import Title from './title.js';
import Button from './button.js';

class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            clicked: false
        };
        this.toggleColour = this.toggleColour.bind(this);
    }

    toggleColour (){
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render (){
        return (
            <div>
                <Title text="Hello" subtitle="our amazing react tutorial" />
                <Button clicked={this.state.clicked} toggleColour={this.toggleColour} />
            </div>
        );
    }
}

export default Home;
