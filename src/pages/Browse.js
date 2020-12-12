import React from "react";

import BrowseContainer from "../containers/BrowseContainer";
import { useContent } from "../hooks/use-content";
import { selectionFilter } from "../utils/selectionFilter";

const Browse = () => {
  // TODO: we need the series and the film
  const { series } = useContent("series");
  const { films } = useContent("films");

  // TODO: we need slides
  const slides = selectionFilter({ series, films });

  // TODO: pass it to the browse container

  return <BrowseContainer slides={slides} />;
};

export default Browse;
