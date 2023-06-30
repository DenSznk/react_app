import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPannel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Employeeslist from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Sam', salary: 800, increase: false, id: 1},
        {name: 'Max', salary: 900, increase: true, id: 2  },
        {name: 'Ned', salary: 1800, increase: false, id: 3},
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {

    })
  }

  render () {
    return (
      <div className="app">
          <AppInfo/>

          <div className='search-pannel'>
            <SearchPannel/>
            <AppFilter/>
          </div>
          <Employeeslist data={this.state.data}
          onDelete={this.deleteItem}/>
          <EmployeesAddForm/>
      </div>
    );
  }

  }

  export default App;