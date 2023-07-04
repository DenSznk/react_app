import './app-info.css'

const AppInfo = ({increased, employees}) => {
    return (
        <div className='app-info'>
            <h1> Employee accounting</h1>
            <h2> Amount: {employees}</h2>
            <h2> Bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;