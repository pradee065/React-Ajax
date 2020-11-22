import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PostWrapper from './Containers/Post-Wrapper/Post-Wrapper';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.setState({
        posts: response.data
      })
    })
  }


  render(){

    const posts = this.state.posts.map((posts) => {
      return <PostWrapper key={posts.id} title={posts.title} descrption={posts.body}/>
    })


    return (
      <ul className="Postcard"> 
        {posts}
      </ul>
    );

  }
}

export default App;
