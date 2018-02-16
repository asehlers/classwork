import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
        {!props.result.thumbnail ? (<Thumbnail src="http://via.placeholder.com/163x170" />
              ) : (<Thumbnail src={props.result.thumbnail} />
              )}
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.result.title}</h3>
          <p>
            Ingredients: "{props.result.ingredients}"
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.result.href}
          >
            Go to recipe!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);