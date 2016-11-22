# Usage

    import Ticker from 'redux-saga-ticker';

    function* hourlyCron () {
      const channel = Ticker(60 * 60 * 1000);
      while (true) {
        yield take(channel);
        yield put({type: 'RUN_HOURLY_CRON'});
      }
    }

Call `channel.close()` to stop the ticker.
