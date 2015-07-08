'use strict';

import React from 'react';
import MyRoot from './myRoot';

React.initializeTouchEvents(true);

React.render(<MyRoot />, document.getElementById('content'));
