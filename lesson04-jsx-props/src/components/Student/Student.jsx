import './Student.css';

const Student = (props) => {
  const { name, subject, gpa, children } = props;
  return (
    <>
      <div className='student'>
        <h6>{name}</h6>
        <p>{subject}</p>
        <p>{gpa}/4.0</p>
      </div>
      {children}
    </>
  );
};

export default Student;
