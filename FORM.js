import React, { useState } from 'react';

const Result = ({ result }) => {
  return (
    <div>
      <h2>Current Result: -</h2>
      <p>Name: {result.name}</p>
      <p>Department: {result.department}</p>
      <p>College Name: {result.collegeName}</p>
      <p>Admission Year: {result.admissionYear}</p>
    </div>
  );
};

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [admissionYear, setAdmissionYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, department, collegeName, admissionYear });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Department:
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <br />
      <label>
        College Name:
        <input type="text" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
      </label>
      <br />
      <label>
        Admission Year:
        <input type="text" value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [currentResult, setCurrentResult] = useState(null);

  const handleSubmit = (result) => {
    setCurrentResult(result);
  };

  return (
    <div>
      <h1>Form: -</h1>
      <Form onSubmit={handleSubmit} />
      {currentResult && <Result result={currentResult} />}
    </div>
  );
};

export default App;