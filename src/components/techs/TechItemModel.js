import React from "react";
import PropTypes from "prop-types";

const TechItemModel = ({ tech }) => {
  const onDelete = () => {};

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItemModel.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechItemModel;
