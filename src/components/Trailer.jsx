import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';

const Trailer = ({item}) => {

  const [show, setShow] = useState(false);

  const opts = {
    playerVars: {
      height: '390',
      width: '100%',
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // "Official Trailer"가 있을 때
  const trailer = item.results?.find((item) => {
    if(item.name === 'Official Trailer'){ 
      return item;
    }
  });
  // type에 "Trailer"가 있을 때

  const trailer2 = item.results?.find((item) => {
    if(item.name === 'Trailer'){ 
      return item;
    }
  });

  return (
    <div>
      <Button className='trailer_button' onClick={() => setShow(true)}>
        Watch a movie
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube videoId={trailer?.key ? trailer?.key : trailer2?.key} opts={opts} onReady={_onReady} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Trailer