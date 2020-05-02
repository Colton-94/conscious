import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
       
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit=(formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues );
      // console.log(formValues);
        //-->>formValues are edited value that will send to api through edit action which will update the stream for us   
    }
    render(){
      //  console.log(this.ownProps);
     // console.log(this.props.str);
       if(!this.props.str){
           return (<div>loading...</div>
           );
        }
        else{
          //   console.log(this.props.str.title);
      return( <div>
          <h3>Edit a Stream</h3>
          <StreamForm 
          initialValues={_.pick(this.props.str,'tittle','description')}
          onSubmit1={this.onSubmit} />
        </div>);
    }}
}


const mapStateToProps=(state,ownProps)=>{
   console.log(ownProps);
    return { str  : state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{ fetchStream,editStream })(StreamEdit);