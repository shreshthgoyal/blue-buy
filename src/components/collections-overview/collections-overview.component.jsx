import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import { selectCollectionsforPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/preview-collection.components";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return (
          <PreviewCollection
            key={id}
            {...otherCollectionProps}
          ></PreviewCollection>
        );
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsforPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
