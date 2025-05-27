import React, { useState, useEffect } from 'react';

export default function Add_event() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: '',
    date: '',
    department: '',
    description: '',
  });
  const [editId, setEditId] = useState(null);

  // Fetch all events
  const fetchEvents = async () => {
    const res = await fetch('http://localhost:3000/events');
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.department || !form.description) {
      alert('Please fill all fields');
      return;
    }

    if (editId !== null) {
      // Update existing event
      await fetch(`http://localhost:3000/events/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      // Add new event
      await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }

    setForm({ title: '', date: '', department: '', description: '' });
    fetchEvents();
  };

  const handleEdit = (id) => {
    const event = events.find((e) => e._id === id);
    if (event) {
      setForm({
        title: event.title,
        date: event.date,
        department: event.department,
        description: event.description,
      });
      setEditId(id);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE',
      });
      if (editId === id) {
        setEditId(null);
        setForm({ title: '', date: '', department: '', description: '' });
      }
      fetchEvents();
    }
  };

  return (
    <div className="container-fluid dashboard-content" style={{ paddingTop: '20px' }}>
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginBottom: '30px' }}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={form.date}
            onChange={handleChange}
            placeholder="Enter date"
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={form.department}
            onChange={handleChange}
            placeholder="Enter department"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          {editId !== null ? 'Update Event' : 'Add Event'}
        </button>
      </form>

      <h3>Event List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Department</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No events added yet.</td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event._id}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.department}</td>
                  <td>{event.description}</td>
                  <td>
                    <button className="btn btn-sm btn-info mr-2" onClick={() => handleEdit(event._id)}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(event._id)}>Delete</button>
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
