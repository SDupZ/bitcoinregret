import React, {Component} from 'react'
import './styles.css'

class AppLoading extends Component {
  render() {
    const {loading} = this.props
    
    let loader = null;
    if (loading) {
      loader = <div className="loader"><div className="loaderInner"/></div>
    }

    return (
      <div>
        {loader}
      </div>
    )
  }
}

export default AppLoading