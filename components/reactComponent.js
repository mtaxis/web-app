'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


// 

class curtirBtn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'Você curtiu isso.';
      }
  
      return e(
        'input',
        { onClick: () => this.setState({ liked: true }) },
        'Curtir'
      );
    }
  }
  
  const btnCurtir = document.querySelector('#curtir-btn');
  ReactDOM.render(e(curtirBtn), btnCurtir);