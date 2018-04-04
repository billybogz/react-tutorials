import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'

import Home from './Home'
import '../css/bootstrap.min.css'
import '../css/fontawesome-all.min.css'

const app = document.querySelector("#app")
ReactDOM.render(<Home name="Home Name" />, app)
