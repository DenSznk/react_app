import './employees-list.css';
import EmployeeslistItem from '../employees-list-item/employees-list-item';

const Employeeslist = ({data, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployeeslistItem name={item.name} salary={item.salary}/>
            <EmployeeslistItem
            key={id      }
            {...itemProps}
            onDelete={() =>  onDelete(id)}/>
        )
    })
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>

    )
}


export default Employeeslist;