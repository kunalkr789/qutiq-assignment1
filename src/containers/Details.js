import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDetails } from "../actions/detailActions";
import _ from "lodash";

const Details = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const detailsState = useSelector((state) => state.Details);
  React.useEffect(() => {
    dispatch(GetDetails(id));
  }, []);

  const showData = () => {
    if (!_.isEmpty(detailsState.data)) {
      return (
        <div className="user-card" key={detailsState.data.user.id}>
          <div className="content">
            <div className="left">
              <div>
                <img className="user-img" src={detailsState.data.user.avatar} />
              </div>
            </div>
            <div className="right">
              <h6 className="card-title">
                Name: {detailsState.data.user.first_name}{" "}
                {detailsState.data.user.last_name}
              </h6>

              <h6>
                Email:{" "}
                <small className="card-text">
                  {detailsState.data.user.email}
                </small>
              </h6>
            </div>
          </div>
        </div>
      );
    }
    if (detailsState.loading) {
      return <p>loading...</p>;
    }
    if (detailsState.errorMsg !== "") {
      return <p>{detailsState.errorMsg}</p>;
    }
    return <p>error getting details</p>;
  };
  return <div>{showData()}</div>;
};

export default Details;
