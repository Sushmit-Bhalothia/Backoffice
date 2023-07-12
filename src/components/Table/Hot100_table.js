import React, { useState } from "react";

const TableComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;
  const totalPages = Math.ceil((data?.length || 0) / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleViewProfile = (page) => {
    setCurrentPage(page);
  };

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="table-data single-line ">Position</th>
            <th className="table-data single-line ">Customer ID</th>
            <th className="table-data single-line ">Name</th>
            <th className="table-data single-line ">Paid Rank</th>
            <th className="table-data single-line ">Country</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {data.slice(startIndex, endIndex).map((entry, index) => (
            <tr
              key={entry.customerId}
              style={{
                backgroundColor: index % 2 === 0 ? "#fdfaff" : "white",
                height: "6vh",
              }}
            >
              <td className="table-data ">{entry.customerId}</td>
              <td className="table-data">{entry.name}</td>
              <td className="table-data">{entry.achievedRank}</td>
              <td className="table-data">{entry.directSponsor}</td>
              <td className="table-data">{entry.name}</td>
              {/* <td className="table-data">{entry.enrollmentLevel}</td> */}
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
            padding: "0.25vh",
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
