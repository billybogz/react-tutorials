import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import '../css/fontawesome-all.min.css'
import '../css/bootstrap.min.css'
import '../dist/css/style.css'

import Home from './Home'

const app = document.querySelector("#app")

ReactDOM.render(<Home />, app)
