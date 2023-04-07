import React from 'react'

function AddProductTable({response}) {
  return (
    <>
      {response.length > 0 && (
      <thead className="gridjs-thead">
        <tr className="gridjs-tr">
          {Object.keys(response[0])?.map((item) => {
            <th
              key={item._id}
              data-column-id="id"
              className="gridjs-th gridjs-th-sort"
              tabIndex="0"
              style={{ minWidth: "44px", width: "47px" }}
            >
              <div className="gridjs-th-content">ID</div>
              <button
                tabIndex="-1"
                aria-label="Sort column ascending"
                title="Sort column ascending"
                className="gridjs-sort gridjs-sort-neutral"
              ></button>
            </th>;
            return (
              <>
                <th
                  data-column-id="id"
                  className="gridjs-th gridjs-th-sort"
                  tabIndex="0"
                  style={{ minWidth: "44px", width: "47px" }}
                  key={item._id}
                >
                  <div className="gridjs-th-content">
                    {item}
                  </div>
                  <button
                    tabIndex="-1"
                    aria-label="Sort column ascending"
                    title="Sort column ascending"
                    className="gridjs-sort gridjs-sort-neutral"
                  ></button>
                </th>
              </>
            );
          })}

          <th
            data-column-id="actions"
            className="gridjs-th gridjs-th-sort"
            tabIndex="0"
            style={{ width: "120px" }}
          >
            <div className="gridjs-th-content">Actions</div>
            <button
              tabIndex="-1"
              aria-label="Sort column ascending"
              title="Sort column ascending"
              className="gridjs-sort gridjs-sort-neutral"
            ></button>
          </th>
        </tr>
      </thead>
    )}
    </>

  )
}

export default AddProductTable