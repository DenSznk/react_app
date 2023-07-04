import './employees-list.css';
import EmployeeslistItem from '../employees-list-item/employees-list-item';

const Employeeslist = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployeeslistItem name={item.name} salary={item.salary}/>
            <EmployeeslistItem
            key={id      }
            {...itemProps}
            onDelete={() =>  onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>

    )
}


export default Employeeslist;