import React from 'react';

class SearchBox extends React.Component{
    state= {term: ''};
    
    onInputChange = event=>{
        this.setState({term: event.target.value});
    };

    onFormSubmit=event=>{
        event.preventDeafult();
        
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <input
                    type="text"
                    value={this.onInputChange} >
                        </input>
                    </form>
                </div>
        )
    }
}


export default SearchBox;