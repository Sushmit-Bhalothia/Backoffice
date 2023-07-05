import React, { useState } from "react";

const TableComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 6;
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
      <table
        style={{
          width: "82vw",
          borderCollapse: "collapse",
          fontFamily: "Montserrat",
        }}
      >
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th style={{ border: "none", padding: "2vh" }}> ID</th>
            <th style={{ border: "none", padding: "2vh" }}>Name</th>
            <th style={{ border: "none", padding: "2vh" }}>Type</th>
            <th style={{ border: "none", padding: "2vh" }}>Subscription</th>
            <th style={{ border: "none", padding: "2vh" }}>Enrollment Date</th>
            <th style={{ border: "none", padding: "2vh" }}>Expiring In</th>
            <th style={{ border: "none", padding: "2vh" }}>Renewal</th>
            <th style={{ border: "none", padding: "2vh" }}>User-Email</th>
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
                <div style={{ padding: "2vh" }}>{entry.customerId}</div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>{entry.name}</div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>
                  {entry.type.map((type, index) => (
                    <div key={index}>{type}</div>
                  ))}
                </div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>
                  {entry.subscription.map((subscription, index) => (
                    <div key={index}>{subscription}</div>
                  ))}
                </div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>
                  {entry.enrollmentDate.map((date, index) => (
                    <div style={{ marginTop: "0.5vh" }} key={index}>
                      {date}
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>
                  {entry.expiringIn.map((date, index) => (
                    <div style={{ marginTop: "0.5vh" }} key={index}>
                      {date}
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>
                  {entry.autoRenewal.map((type, index) => (
                    <div style={{ marginTop: "0.5vh" }} key={index}>
                      {type}
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <div style={{ padding: "2vh" }}>{entry.email}</div>
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
