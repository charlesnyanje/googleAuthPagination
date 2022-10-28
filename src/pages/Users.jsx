import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom'
import { FaUser, FaCalendarTimes, FaMap, FaLock, FaPhone, FaEnvelopeOpen } from 'react-icons/fa'

const Users = () => {
  
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 1

  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user, idx) => {
    return (
      <>

        < div className="App">

          <div className="navbar">
            <Link to='/' className='btn'>Home</Link>

            <Link to='/About' className="btn">About</Link>

          </div>

          <div className="block bcg-black"></div>
          <div className="block">

            <div key={idx} className="container">







              <img src={user.picture.thumbnail} alt="" className="user-img" />



              <p className="user-title">{user.name.first}</p>
              <p className="user-value"></p>
              <div className="values-list">
                <button className="icon" data-label="name">
                  <FaUser />
                </button>
                <button className="icon" data-label="street">
                  <FaMap />
                </button>
                <button className="icon" data-label="phone">
                  <FaPhone />
                </button>
                <button className="icon" data-label="age">
                  <FaCalendarTimes />

                </button>
                <button className="icon" data-label="email">
                  <FaEnvelopeOpen />
                </button>

                <button className="icon" data-label="password">
                  <FaLock />
                </button>

              </div>

            </div>
          </div>

        </div>









      </>


    )

  })



  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=6")
      .then(data => data.json())
      .then(json_result => {
        let users = json_result.results
       
        setUsers(users);
        setLoading(false);
      });
  }, []);




  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div>
{loading ? <div div className="heading">Loading..</div> : <>{displayUsers}</>}

      

      <ReactPaginate

      
        previousLabel={"PREV"}

        nextLabel={"NEXT"}
        
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
        
      />

    </div>
  );
};





export default Users;



