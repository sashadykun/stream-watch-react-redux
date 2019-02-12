import React, { Component } from 'react';


class GoogleAuth extends Component {
    

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '691913867588-vecuit8eqsafoubvu4lk2vftlsoa0he5.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render(){
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;