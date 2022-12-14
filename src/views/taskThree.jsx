import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Spinner,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

import {
  CustomButton,
  FlexRow,
  CustomSelect,
  FlexSpaceBetween,
} from "../components";

import axios from "axios";
import { Doughnut, Line } from "react-chartjs-2";

import classnames from "classnames";

export const TaskThree = () => {
  /**
   * Data
   */
  const [data, setData] = useState([]);

  /**
   * Pagination
   */
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);

  /**
   * Loading and Error
   */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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

  const limitOptions = [25, 50, 75, 100, 150, 200];

  const findCountByCondition = (condition) =>
    data?.users.reduce(
      (acc, current) => (condition(current) ? acc + 1 : acc),
      0
    );

  const BloodGroupLabels = Array.from(
    new Set(data?.users?.map((item) => item?.bloodGroup))
  );

  console.log({
    total: data?.total,
    page,
    loadMore: page * limit > data?.total,
  });

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
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="my-5">Graph By</h1>
          <div className="d-flex flex-column align-items-center">
            <strong>
              Viewed:{" "}
              <span className="h5 text-danger">{data?.users?.length}</span>{" "}
              users
            </strong>

            <strong>of</strong>

            <strong>
              Total: <span className="h5 text-danger">{data?.total}</span> users
            </strong>
          </div>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggle("1")}
            >
              Gander
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => toggle("2")}
            >
              Age
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => toggle("3")}
            >
              Blood Group
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-5">
            <Doughnut
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    data: [
                      findCountByCondition((item) => item?.gender === "male"),
                      findCountByCondition((item) => item?.gender === "female"),
                    ],
                    backgroundColor: ["teal", "pink"],
                  },
                ],
              }}
            />
          </TabPane>
          <TabPane tabId="2" className="p-5">
            <Line
              data={{
                labels: data?.users?.map((item) => item?.age),
                datasets: [
                  {
                    data: data?.users?.map((item) => item?.age),
                  },
                ],
              }}
            />
          </TabPane>
          <TabPane tabId="3" className="p-5">
            <Doughnut
              data={{
                labels: BloodGroupLabels,
                datasets: [
                  {
                    data: BloodGroupLabels.map((bloodGroup) =>
                      findCountByCondition(
                        (item) => item?.bloodGroup === bloodGroup
                      )
                    ),
                    backgroundColor: [
                      "teal",
                      "pink",
                      "crimson",
                      "indigo",
                      "seagreen",
                      "orange",
                      "#555555",
                    ],
                  },
                ],
              }}
            />
          </TabPane>
        </TabContent>

        <FlexSpaceBetween>
          <FlexRow>
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

            <CustomButton
              onClick={() => {
                if (page >= 1 && page * limit < data?.total) {
                  setPage(page + 1);
                }
              }}
              disabled={page * limit >= data?.total}
            >
              Load More
            </CustomButton>
          </FlexRow>
          <div className="d-flex align-items-center" style={{ gap: "15px" }}>
            <div>View</div>
            <CustomSelect
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            >
              {limitOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  disabled={option > data?.total}
                >
                  {option}
                </option>
              ))}
            </CustomSelect>
            <div>rows</div>
          </div>
        </FlexSpaceBetween>
      </div>
    )
  );
};
