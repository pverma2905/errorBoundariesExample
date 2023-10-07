import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: ''
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error: error };
    }

    componentDidCatch(error, info) {
        console.log('error is: ', error)
        console.log('info is: ', info)
    }

    render() {
        if (this.state.error) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Some Error Occurred.....</h1>
                    {/* <p>{this.state.error}</p> */}
                </div>
            );
        }

        return this.props.children;
    }
}
