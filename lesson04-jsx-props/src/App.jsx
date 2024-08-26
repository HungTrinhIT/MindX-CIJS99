import './App.css';
import Student from './components/Student/Student';
import Header from './components/Header/Header';

//JSX
/*
  - JSX: Javascript XML
  - Có thể viết JS ở trong JSX và nằm trong cặp dấu {}
  - JSX chỉ có duy nhất 1 thẻ cha hoặc sử dụng cặp thẻ
  thẻ giả bên ngoài <> </>
  - Thuộc tính CSS class -> className
  - style -> nhận vào 1 object thay vì chuỗi 
*/

//props: properties
// children props

// Trang web
function App() {
  // JSX: Javascript XML (HTML)
  // Javascript + XML

  const studentCount = 8;
  const headerElement = <Header />;

  return (
    <div>
      {headerElement}
      <p>{'Trường học công nghệ MindX'.toUpperCase()}</p>
      <p>{1 + 1}</p>
      <p
        style={{
          textAlign: 'center',
          backgroundColor: 'red',
          color: 'white',
          marginBottom: '16px',
        }}>
        Có {studentCount} học sinh
      </p>
      <div className='student-list'>
        <Student name='Nguyễn Quang Hải' subject='Vue' gpa='2.5' />
        <Student name='Lee' subject='Football' gpa='2.5'>
          <p>Gender: Male</p>
          <button>Xem chi tiết</button>
        </Student>
        <Student name='Lê Quang Định' subject='ReactJS' gpa='4.0' />
        <Student name='Phạm Quỳnh Anh' subject='Java' gpa='3.0' />
        <Student name='Phạm Bảo Trâm' subject='Golang' gpa='2.0' />
        <Student name='Phan Văn Trị' subject='Ruby' gpa='3.2' />
        <Student name='Hồ Ngọc Trung' subject='Pascal' gpa='3.6' />
        <Student name='Nguyễn Hải Tiến' subject='Python' gpa='3.8' />
      </div>
    </div>
  );
}

export default App;
