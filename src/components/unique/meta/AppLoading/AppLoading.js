import React, {Component} from 'react'
import './styles.css'

class AppLoading extends Component {
  render() {
    const {loading} = this.props
    
    let loader = null;
    if (loading) {
      loader = <h1>App Loading</h1>
    }

    return (
      <div>
        {loader}
      </div>
    )
  }
}

export default AppLoading