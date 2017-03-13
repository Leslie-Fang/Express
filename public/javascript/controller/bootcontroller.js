//import Vistor from './reactjs1_control.js';
var Vis = require('./reactjs1_control.js');

var Column = React.createClass({
    render : function(){
    return (
        <div className="row">
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1">.col-md-1<button type="button" className="btn btn-success">Success</button></div>
        </div>
    );}
});

var Table = React.createClass({
    render : function(){
        return(
        <div>
            <table className="table table-striped">
                <tr className="active">
                    <td className="active">a</td>
                    <td className="success">s</td>
                    <td className="warning">s</td>
                    <td className="danger">s.</td>
                </tr>
            </table>
            <table className="table">
                <tr className="active">
                    <td className="active">a</td>
                    <td className="success">s</td>
                    <td className="warning">s</td>
                    <td className="danger">s.</td>
                    <td className="info">.s.</td>
                    <td className="info">.sxs.</td>
                </tr>
            </table>
        </div>);
    }
});

var Form = React.createClass({
   render : function(){
       return(
           <div>
                   <form>
                       <div class="form-group">
                           <label for="exampleInputEmail1">Email address</label>
                           <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                       </div>
                       <div class="form-group">
                           <label for="exampleInputPassword1">Password</label>
                           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                       </div>
                       <div class="form-group">
                           <label for="exampleInputFile">File input</label>
                           <input type="file" id="exampleInputFile"/>
                               <p class="help-block">Example block-level help text here.</p>
                       </div>
                       <div class="checkbox">
                           <label>
                               <input type="checkbox"/> Check me out
                           </label>
                       </div>
                       <button type="submit" class="btn btn-default">Submit</button>
                   </form>
           </div>
       )
   ;}
});


var Board = React.createClass({
    render : function(){
        return (
            <div>
                <Column/>
                <Table/>
                <Form/>

            </div>
        );
    }

});

ReactDOM.render(
    <Board />,
    document.getElementById('blank_area')
);


