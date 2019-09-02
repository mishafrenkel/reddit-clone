import React, { Component } from 'react';
import firebase from './firebase-config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');

    postsRef.on('value', (snapshot) => {
      console.log(snapshot.val());

      this.setState({
        posts: snapshot.val(),
        loading: false
      })
    });
  }


  render() {
    return (
      <div className="App">
        {this.props.children && React.cloneElement(this.props
          .children, {
            firebase: firebase.database(),
            posts: this.state.posts,
            loading: this.state.loading
          }
        )}
      </div>
    );
  }
}
export default App;
