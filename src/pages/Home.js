import React, { useState, useEffect }  from 'react'

const Home = () => {
  const [token, setToken] = useState('');
  const [userid, setUserid] = useState('');
  const [course, setCourse] = useState([]);

  useEffect( () => {
    fetchGetData();
  }, []);

  // useEffect( () => {
  //   fetchPostData();
  // }, []);

  const fetchGetData = async () => {
    const response = await fetch(`https://examplebd.com/api/get-csrf-token`);
    const data = await response.json();
    setToken(data.csrf_token);
    console.log(data);
    console.log('data fetching get method...');
  }

  const fetchPostData = async () => {
    await fetch(`https://examplebd.com/api/live-classes`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 'user_id': 10089 })
    }).then((response) => response.json())
    .    then((data) => {
      console.log(data);
      setCourse(data);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log('data fetching post method...');
  }

  const handleValue = (e) => {
    setUserid(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    fetchPostData();
  }

  return (
    <div className="App">
      <div>
        <h1>Data fetched using get method</h1>
        <p>{token}</p>
      </div>
      <div>
        <h1>Data fetched using post method</h1>
        <form onSubmit={submitHandler}>
          <input autoFocus type="text" value={userid} onChange={handleValue} />
        </form>
        {course && course.length? (
          course.map((c) => {
          return(
            <div key={c.id}>
              <h3>{c.title}</h3>
              <h4>{c.course_title}</h4>
              <p>Meeting ID: {c.meeting_id}</p>
              <p>Passcode: {c.meeting_password}</p>
              <p>Time: {c.starting_time} to {c.ending_time}</p>
              <p>User: {c.user_name} - {c.user_id}</p>
            </div>
          )
        })
        ) : (<p>Type <i><b>10089</b></i> and hit <i><b>ENTER</b></i></p>)}
      </div>
    </div>
  )
}

export default Home