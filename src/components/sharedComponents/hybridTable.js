import React, { useState, useEffect } from "react";

const TableComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    window.innerWidth < 600 ? 12 : 6
  );

  useEffect(() => {
    const handleResize = () => {
      setEntriesPerPage(window.innerWidth < 600 ? 12 : 6);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil((data?.length || 0) / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleViewProfile = (customerId) => {
    console.log("View profile clicked for customerId:", customerId);
  };

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th className="table-data"> ID</th>
            <th className="table-data">Name</th>
            <th className="table-data">Type</th>
            <th className="table-data">Subscription</th>
            <th className="table-data">Enrollment_Date</th>
            <th className="table-data">Expiring_In</th>
            <th className="table-data">Renewal</th>
            <th className="table-data">User-Email</th>
            {/* <th style={{ border: "none" }}>View Profile</th> */}
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {data.slice(startIndex, endIndex).map((entry, index) => (
            <tr
              key={entry.customerId}
              style={{
                textAlign: "left",
                backgroundColor: index % 2 === 0 ? "#fdfaff" : "white",
              }}
            >
              <td>
                <div className="table-data">{entry.customerId}</div>
              </td>
              <td>
                <div className="table-data">{entry.name}</div>
              </td>
              <td className="table-data">
                <div>
                  {entry.type.map((type, index) => (
                    <div key={index}>{type}</div>
                  ))}
                </div>
              </td>
              <td className="table-data">
                <div>
                  {entry.subscription.map((subscription, index) => (
                    <div key={index}>{subscription}</div>
                  ))}
                </div>
              </td>
              <td className="table-data">
                <div>
                  {entry.enrollmentDate.map((date, index) => (
                    <div style={{ marginTop: "0.5vh" }} key={index}>
                      {date}
                    </div>
                  ))}
                </div>
              </td>
              <td className="table-data">
                <div>
                  {entry.expiringIn.map((date, index) => (
                    <div style={{ marginTop: "0.5vh" }} key={index}>
                      {date}
                    </div>
                  ))}
                </div>
              </td>
              <td className="table-data">
                <div>
                  {entry.autoRenewal.map((type, index) => (
                    <div style={{ marginTop: "0.5vh" }} key={index}>
                      {type}
                    </div>
                  ))}
                </div>
              </td>
              <td className="table-data">
                <div>{entry.email}</div>
              </td>
              {/* <td>
                <button
                  className="Smaller-Button"
                  onClick={() => handleViewProfile(entry.customerId)}
                >
                  View
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            border: "none",
            margin: "0.125vw",
            fontWeight: "bold",
            margin: "1.25vh",
          }}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              backgroundColor: "white",
              border: "none",
              margin: "0.125vw",
              fontWeight: currentPage === page ? "bold" : "normal",
            }}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            border: "none",
            backgroundColor: "white",
            margin: "0.125vw",
            fontWeight: "bold",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
