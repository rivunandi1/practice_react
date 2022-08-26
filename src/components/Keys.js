import  React from 'react'

const data = [
    {emp_id:1,emp_name:'Ram',emp_loc:'Kol'},
    {emp_id:2,emp_name:'Sam',emp_loc:'Del'},
    {emp_id:3,emp_name:'Sachin',emp_loc:'Pune'},
    {emp_id:4,emp_name:'Peter',emp_loc:'Howrah'},
    {emp_id:5,emp_name:'Kevin',emp_loc:'Midnapur'}
];
const showdata=data.map((item)=>{
    return <option value={item.emp_id}>{item.emp_loc}</option>
});
const showlist=data.map((item)=>{
    return <li key={item.emp_id}>{item.emp_loc}</li>
});
class keys extends React.Component
{
    render(){
        return(
            <div>
                <h2>rendering using keys</h2>
                <select>{showdata}</select>
                <br></br><br></br>
                </div>
        )
    }
}
export default keys;