import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import { USER_DATA, SERVICES, COMMENTS } from './constants/staticData';
import PersonInfo from './components/PersonInfo';
import Services from './components/Services';
import Comments from './components/Comments';
import AddCommentForm from './components/AddCommentForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: USER_DATA,
      services: [...SERVICES],
      comments: [...COMMENTS],
    };
  }

  addComment = (message) => {
    const date = new Date().toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const comment = {
      id: uuidv4(),
      name: 'Guest',
      date: date.slice(0, date.length - 3),
      message,
    };

    this.setState((prevState) => ({
      comments: [...prevState.comments, comment],
    }));
  }

  render() {
    const { user, services, comments } = this.state;

    return (
      <div
        className="user-card container"
      >
        <PersonInfo user={user} />
        <Services services={services} />
        <Comments comments={comments} />
        <AddCommentForm onSubmit={this.addComment} />
      </div>
    );
  }
}

export default App;
