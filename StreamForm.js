import React from 'react';
import {Field, reduxForm } from 'redux-form';



class StreamForm extends React.Component {
    renderError=({touched,error})=>{
        if(touched&&error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput=({input, label, meta ,})=>  {
       
        
        const className=`field ${meta.error&&meta.touched?'error':''}`
        return (
          <div className={className}>
        <label>{label}</label>
                <input {...input} autoComplete="off" />
                
                {this.renderError(meta)}
                </div>  
        );//{...input } means formprops.input which conatains all formProps.input.onChang formProps.input.value
            //onChange={formProps.input.onChange}
              //      value={formProps.input.value} />
        

    }   
    onSubmit=formValues=>{
        this.props.onSubmit1(formValues);
        
    }
    render(){
        return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)}
    className="ui form error" >
            <Field  name="tittle" component={this.renderInput} label="Enter Tittle" />
            <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button">submit</button>
        
    </form>
        
        );

}

}
const validate=formValues=>{
    const errors= {};
    if(!formValues.tittle){
        errors.tittle='please enter tittle';
    }
    if(!formValues.description){
        errors.description='please enter description';

    }
    return errors;
}

export default reduxForm({
        form: 'streamCreate',validate
    })(StreamForm);

 