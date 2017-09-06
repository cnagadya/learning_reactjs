import React from 'react';
class First extends React.Component {

    render() {
        return ( <
            div >
            <
            p > Issa Christine <
            /p> <
            Second / > < /
            div >
        )
    }
}
class Second extends React.Component {
    constructor() {
        super();
        this.btn = {
            initial_value: 0
        };
        this.increment = this.increment.bind(this);

    }
    increment() {

        //        increment the button value
        console.log("Clicky clicked");
        // using react inbuilt setstate
        this.setState({
            initial_value: this.btn.initial_value++
        });

    }
    render() {
        return (

            <
            div > Counter:
            <
            button onClick = {
                this.increment
            } > {
                this.btn.initial_value
            } <
            /button>   < /
            div >



        )
    }
}
export default First;
