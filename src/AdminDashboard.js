import React from 'react';
function AdminDashboard({ students, onApprove }) {
    return (

        <div>

            <h2>Admin Dashboard</h2>

            <ul>

                {students.map((student) => (

                    <li key={student.email}>

                        Name: {student.name}, Email: {student.email}, Status: {student.status}

                        {student.status === 'pending' && (

                            <button onClick={() => onApprove(student.email)}>Approve</button>
                            

                        )}

                    </li>

                ))}

            </ul>

        </div>

    );

}
export default AdminDashboard;