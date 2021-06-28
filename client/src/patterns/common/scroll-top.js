import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    history.listen(() => {
      document.body.scrollTo(0, 0);
    });
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);