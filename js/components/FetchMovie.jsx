import React from 'react';
import ReactTouchEvents from 'react-touch-events';
import DisplayMovie from './DisplayMovie.jsx';
const url = 'http://localhost:3000/movies';

export default class FetchMovie extends React.Component{

  constructor (props){
    super(props);
    this.state={
      data: [],
      index: 0,
      datas: [],
      length: 0
    }
  };

  componentDidMount=()=>{
    this.FetchMovies();
    this.FetchLength();
  };

  FetchLength=()=>{
    return fetch(url).then(r=>r.json()).then (datas=>{
      this.setState({
        datas: datas,
        length: datas.length
      })
    })
  }

  FetchMovies =()=> {
    return fetch(url).then(r=>{
      if(r.ok)
      return r.json();
      else
      throw new Error ('Errors')
    }).then (data=>{
      this.setState({
        data: data[this.state.index]
      })
    }).catch(err => {
      console.log(err);
    })
  };

  handleAccept=()=>{
    this.acceptFetch();
  }


  acceptFetch=()=>{
    let index=this.state.index;
    index=index.toString().slice();
    let counter = parseInt(index);
    counter++;
    const vote = {
      "vote": "accept"
    };
    this.setState({
      index: counter
    });
    this.FetchMovies();
    return fetch(url +'/'+ this.state.data.id,{
      method: 'PUT',
      body: JSON.stringify(vote),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      return res;
    });
  };

  handleReject=()=>{
    this.rejectFetch();
  }

  rejectFetch=()=>{
    let index=this.state.index;
    index=index.toString().slice();
    let counter = parseInt(index);
    counter++;
    const vote = {
      "vote": "reject"
    };
    this.setState({
      index: counter
    });
    this.FetchMovies();
    return fetch(url +'/'+ this.state.data.id,{
      method: 'PUT',
      body: JSON.stringify(vote),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      return res;
    });
  };

  handleSwipe=(direction)=>{
    switch(direction) {
      case 'right':
      return this.acceptFetch();
      case 'left':
      return this.rejectFetch();
    }
  }



  renderMyMovie=()=>{
    if(this.state.index>=this.state.length) {
      return(
        <div className='container'>
          <div className='row justify-content-center align-items-center header'>
            <i className='fa fa-video-camera col-2 text-center' aria-hidden='true'></i>
            <h1 className='text-center col-8 text-center'>Tinder for movies</h1>
            <i className='fa fa-cog col-2 text-center' aria-hidden="true"></i>
          </div>
          <div className='row justify-content-center'>
            <div className='col text-center movieImg'>
              <img className='rounded' src='https://cdn.empireonline.com/jpg/70/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/59395a49f68e659c7aa3a1a8/The%20Silence%20of%20the%20Lambs.jpg'/>
            </div>
          </div>
            <div className='row'>
              <h2 className='col text-center title'>Data base is empty!!!</h2>
            </div>
        </div>
      )

    }else{
    return <DisplayMovie key={this.state.data.id} data={this.state.data} handleAccept={this.handleAccept} handleReject={this.handleReject}/>
    };
    }


  render(){
    return(
      <div className='container'>
        <ReactTouchEvents onSwipe={this.handleSwipe}/>
        {this.renderMyMovie()}
      </div>
    )
  }
}
