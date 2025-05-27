import React, { useState, useEffect } from 'react';

export default function Registration() {
  const [Student, setStudent] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    rollno: '',
  });
  const [editId, setEditId] = useState(null);

  // Fetch users from backend
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    setStudent(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.rollno) {
      alert('Please fill all fields');
      return;
    }
    if (editId !== null) {
      // Edit existing user - backend PUT route not implemented yet
      alert('Edit functionality not implemented yet');
    } else {
      // Add new user
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      fetchUsers();
    }
    setForm({ name: '', email: '', rollno: '' });
    setEditId(null);
  };

  const handleEdit = (id) => {
    const emp = Student.find((e) => e._id === id);
    if (emp) {
      setForm({ name: emp.name, email: emp.email, rollno: emp.rollno });
      setEditId(id);
    }
  };

  const handleDelete = (id) => {
    alert('Delete functionality not implemented yet');
  };

  return (
    <div className="container-fluid dashboard-content" style={{ paddingTop: '20px' }}>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginBottom: '30px' }}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>rollno</label>
          <input
            type="tel"
            name="rollno"
            className="form-control"
            value={form.rollno}
            onChange={handleChange}
            placeholder="Enter rollno"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          {editId !== null ? 'Update Student' : 'Add Student'}
        </button>
      </form>

      <h3>Student List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>rollno</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Student.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center">No Student added yet.</td>
              </tr>
            ) : (
              Student.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp._id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.rollno}</td>
                  <td>
                    <button className="btn btn-sm btn-info mr-2" onClick={() => handleEdit(emp._id)}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp._id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
