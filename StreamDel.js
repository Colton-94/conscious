import React from 'react';
import Modal from '../Modal';
import createBrowserHistory from '../../history';
import {fetchStream,deleteStream} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class  StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    actionsRender(){
      // const  {id} = this.props.match.params;
      return( 
        
           <React.Fragment>
                <button onClick={()=>this.props.deleteStream(this.props.stream.id)} className="ui button negative">DELETE </button>    
                <Link to={"/"} className="ui button">CANCEL </Link>    
            </React.Fragment>
      );

    }
    contentRender(){
        if(!this.props.stream ){
        return 'Are you sure??'
    }
            
                return `Are you sure you want to delete this:${this.props.stream.tittle}`;
            
        
    }
    render(){
 
    return( 
            
            <Modal title="Delete Stream" 
            content={this.contentRender()} 
            actions={this.actionsRender()}
            onDismiss={()=>createBrowserHistory.push('/')} /> 

    );
    }
}

const mapStateToProps =(state,ownProps)=> {
    return {stream : state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);