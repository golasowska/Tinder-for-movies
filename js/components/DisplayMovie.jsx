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
    // console.log('DisplayMovie ma propsy', this.props.data);
    const{imageURL, title, summary,rating} = this.props.data;


    return(
      <div className='container'>
        <div><i className='fa fa-video-camera' aria-hidden='true'></i></div>
        <img src={imageURL}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <h4>{rating}</h4>
        <div>
            <button onClick={this.rejectMovie} className='btn btn-danger'>Don't like</button>
            <button onClick={this.acceptMovie} className='btn btn-primary'>I like</button>
        </div>
      </div>
    )
  }
}
