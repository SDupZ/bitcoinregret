import React, {Component} from 'react'
import './styles.css'

class AppLoading extends Component {
  render() {
    const {loading} = this.props
    
    let loader = null;
    if (loading) {
      loader = <div className="loaderInner"/>
    }

    return (
      <div className="loader">
        {loader}
      </div>
    )
  }
}

export default AppLoading