import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetList } from "../actions/detailActions";
import { Link } from "react-router-dom";

const List = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.List);
  React.useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    dispatch(GetList());
  };

  const showData = () => {
    if (!_.isEmpty(list.data)) {
      return list.data.data.map((e) => {
        return (
          <div className="list-group" key={e.id}>
            <Link className="list-group-item" to={`/details/${e.id}`}>
              <p>
                {e.first_name} {e.last_name}
              </p>
            </Link>
          </div>
        );
      });
    }
    if (list.loading) {
      return <p>loading...</p>;
    }
    if (list.errorMsg !== "") {
      return <p>{list.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };

  return (
    <div>
      <h2>Users List:</h2>
      {showData()}
    </div>
  );
};

export default List;
