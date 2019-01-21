import React,{Component} from 'react';

class Article extends Component{
    state={
        isOpen: false
    };

    render() {
          console.log(this.props);
        const {article}= this.props;
        const {foo}=this.props;
        const {flag}=this.props;
        const stile={width:'50%'};

        let body =this.state.isOpen && <section className='card-text'>{article.text}</section>;
        return(
            <div  className="card mx-auto" style={stile}>
                <div className='card-header'>
                 <h2 >
                     {article.title}
                        <button className='btn btn-primary btn-lg float-right' onClick={this.handleClick}>{this.state.isOpen ? "close":"open"}
                        </button>
                 </h2>
                </div>
                <div className='card-body'>
               <h6 className='card-subtitle text-muted'>creation date: {foo} {(new Date(article.date)).toDateString()}{flag}</h6>
                    {body}
                </div>

            </div>
        )
    }
    handleClick=()=>{
        console.log("----","clicked");
        // this.state.isOpen==false &&this.setState({
        //     isOpen:true
        // });
        // this.state.isOpen &&this.setState({
        //     isOpen:false
        // });
        this.setState({
           isOpen:!this.state.isOpen
        });

    }


}






export  default Article;