import './App.css'

const userDetailsList = [
  {
    employeeID: 1,
    name: 'Esther Howard',
    designation: 'Software Developer',
    dateOfBirth: '29/08/1994',
  },
  {
    employeeID: 2,
    name: 'Floyd Miles',
    designation: 'Oracle Developer',
    dateOfBirth: '15/10/1994',
  },

  {
    employeeID: 3,
    name: 'Jacob Jones',
    designation: 'Python Developer',
    dateOfBirth: '1/12/1990',
  },
  {
    employeeID: 4,
    name: 'Devon Lane',
    designation: 'React Developer',
    dateOfBirth: '10/05/1996',
  },
]

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Designation</th>
          <th>Date of Birth</th>
        </tr>
        {userDetailsList.map((val, key) => (
          <tr key={key}>
            <td>{val.employeeID}</td>
            <td>{val.name}</td>
            <td>{val.designation}</td>
            <td>{val.dateOfBirth}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default App
