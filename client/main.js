import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ImageList from './components/ImageList'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }

    componentWillMount() {
        axios({
            method: 'get',
            url: 'https://api.imgur.com/3/gallery/hot/viral/0',
            headers: {
                'authorization': 'Client-ID ' + '29052a0c342e6be'
            }
        }).then(response => this.setState({
            images: response.data.data
        }))
    }

    render() {
        return ( 
            <div >
                <ImageList {...this.state} />
            </div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render( < App /> , document.querySelector('.container'))
})