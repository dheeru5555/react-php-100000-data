
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';

function PhpFetch() {
    const [users, setUsers] = useState([]);
    
    const getUsers = async () => { 
     const response = await fetch('http://localhost/api_php/api.php');
     setUsers(await response.json());
     } 

    useEffect(() => {
      getUsers();
    }, []);
    
    return (
         <div className="container">
           <h3 className="text-center mt-4">Data Fetch</h3>
            <div className="row">
                  <table className="table table-striped">
                      <thead>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Birth Date</th>
                        <th>Record Update</th>
                      </thead>
                        {
                          users.map((res) => {
                           return (
                            <tbody>
                            <td>{res.id}</td>
                            <td>{res.first_name}</td>
                            <td>{res.last_name}</td>
                            <td>{res.email}</td>
                            <td>{res.birthdate}</td>
                            <td>{res.added}</td>
                            </tbody>    
                              )
                            })
                         }  
                </table>    
            </div>    
         </div>
    );
  }

export default PhpFetch;