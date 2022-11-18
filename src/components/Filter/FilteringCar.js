import React, { useState, useEffect, useCallback } from 'react';
import FilterBar from './FilteringBar';
import ResultCars from './ResultCars'

const FilterCar = (props) => {
  return (
  	<div>
		  {props.onContent}
		</div>
	)

}

export default FilterCar;