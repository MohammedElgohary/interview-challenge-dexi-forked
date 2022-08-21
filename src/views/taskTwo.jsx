import React, { useState, useEffect } from "react";
import { Alert, Button, Spinner, Table } from "reactstrap";
import {
  TableRow,
  CustomButton,
  FlexRow,
  CustomSelect,
  FlexSpaceBetween,
} from "../components";
import axios from "axios";

export const TaskTwo = () => {
  /**
   * Data
   */
  const [data, setData] = useState([]);

  /**
   * Pagination
   */
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  /**
   * Loading and Error
   */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    /**
     * Update loading state to true
     */
    setLoading(true);

    /**
     * Fetch data from API
     * If the response is ok then update the state
     * If the response is not ok, then update the error state
     * Finally, update the loading state
     */
    axios
      .get("https://dummyjson.com/users", {
        params: {
          skip: limit * (page - 1),
          limit,
        },
      })
      .then(({ data }) => {
        setData(data);
        console.log(data);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page, limit]);

  return loading ? (
    <div className="p-5 text-center">
      <Spinner color="primary" />
    </div>
  ) : error ? (
    <Alert color="danger">
      An error occurred !
      <br />
      <Button color="primary" onClick={() => getData()}>
        Try Again !
      </Button>
    </Alert>
  ) : (
    data && (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th className="text-center">Blood Group</th>
              <th>Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((item, index) => (
              <TableRow key={index + item.id} {...item} />
            ))}
          </tbody>
        </Table>

        <FlexSpaceBetween>
          <FlexRow>
            <CustomButton
              onClick={() => {
                if (page >= 1) {
                  setPage(page + 1);
                }
              }}
              disabled={page >= data?.total}
            >
              Load More
            </CustomButton>

            <CustomButton
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              disabled={page <= 1}
            >
              Load Less
            </CustomButton>
          </FlexRow>

          <CustomSelect
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </CustomSelect>
        </FlexSpaceBetween>
      </div>
    )
  );
};
