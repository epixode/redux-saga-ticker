
import {eventChannel, buffers} from 'redux-saga';

export default function Ticker (period) {

  const tickerChannel = eventChannel(function (listener) {
    const interval = setInterval(onTick, period);
    function onTick () {
      listener(Date.now());
    }
    return function () {
      clearInterval(interval);
    };
  }, buffers.sliding(1));

  return tickerChannel;

};
