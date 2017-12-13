import React from 'react';
import _ from 'lodash';
export default class DisplayMovie extends React.Component{


  acceptMovie=()=>{
    if(typeof this.props.handleAccept === 'function') {
      this.props.handleAccept(this.props.data.id)
    }
  };

  rejectMovie=()=>{
    if(typeof this.props.handleReject === 'function') {
      this.props.handleReject(this.props.data.id)
    }
  }

  render(){
    const{imageURL, title, summary,rating} = this.props.data;
    return(
      <div className='container'>
        <div className='row justify-content-center align-items-center header'>
          <i className='fa fa-video-camera col-2 text-center' aria-hidden='true'></i>
          <h1 className='text-center col-8 text-center'>Tinder for movies</h1>
          <i className='fa fa-cog col-2 text-center' aria-hidden="true"></i>
        </div>
        <div className='row justify-content-center'>
          <div className='col text-center movieImg'>
            <img className='rounded' src={imageURL}/>
          </div>
        </div>
        <div className='row'>
          <h2 className='col text-center title'>{title}</h2>
        </div>
        <div className='row'>
          <div className='col text-center descr'>{summary}</div>
        </div>
        <div className='row'>
          <span className='col text-center raiting'>{rating}</span>
        </div>
        <div className='row justify-content-center buttons  align-self-end '>
            <button onClick={this.rejectMovie} className='btn btn-outline-danger btn-lg col-4 align-self-end '>Don't</button>
            <button onClick={this.acceptMovie} className='btn btn-outline-primary btn-lg col-4 align-self-end '>I like</button>
        </div>
      </div>
    )
  }
}
