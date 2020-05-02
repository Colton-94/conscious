import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderAdmin(stream){
        if(stream.userId===this.props.currentUserId){
            return(
                <div className="right floated content">
                 <Link to={`streams/edit/${stream.id}`} className="ui button primary">Edit </Link>  
                 <Link to={`streams/delete/${stream.id}`} className="ui button negative"> Delete </Link> 
                </div>
            );//url based selection
        }
    }
    renderList(){
        
         return   this.props.streams.map(stream=>{
                return (
                    <div className="item" key="{stream.id}">
                          {this.renderAdmin(stream)}
                       
                      <i className="large middle aligned icon camera" />
                      <div className="content">
                          <Link to={`/streams/${stream.id}`} className="header">
                          {stream.tittle}
                          </Link>
                          <div className="description">{stream.description}
                          </div>
                         
                          </div>
                              </div>
                );

            });
        
    };
    renderCreate(){
        if(this.props.isSigned){
        return(
            <div style={{textAlign:'right'}}>
                <Link to="/streams/new" className="ui primary button">
                Create
                </Link>
            </div>

        );
        }
    }
 render(){

    return (
    <div>
        <h2>Streams</h2>
        <div className="ui celled list">
            {this.renderList()}
         
        </div>
        {this.renderCreate()}
    </div>
    );
 }
}
const mapStatetoProps=(state)=>{
    return {streams : Object.values(state.streams),
            currentUserId:state.auth.userId,
            isSigned:state.auth.isSignedIn};
};

export default connect(mapStatetoProps,{fetchStreams})(StreamList);