import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
      if (e.code === 'Escape') {
      this.props.onCloseModal();
      }
  };

  handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
      this.props.onCloseModal();
      }
  };

  render() {
    
      return (
      <div className="overlay" onClick={this.handleOverlayClick}>
          <div className="modal">
          <img src={this.props.largeImage}  />
          </div>
      </div>
      );
  }
};