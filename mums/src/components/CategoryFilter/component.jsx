import React from 'react';

export default function CategoryFilter(props) {
  const allEnabledByOthersNotActive = (
    !props.categoryFilters.mainDish &&
    !props.categoryFilters.drink &&
    !props.categoryFilters.dessert
  )
  const allEnabledByOthersActive = (
    props.categoryFilters.mainDish &&
    props.categoryFilters.drink &&
    props.categoryFilters.dessert
  );
  const allEnabled = allEnabledByOthersNotActive || allEnabledByOthersActive;
  const mainDishEnabled = !allEnabledByOthersNotActive && props.categoryFilters.mainDish === true;
  const drinkEnabled = !allEnabledByOthersNotActive && props.categoryFilters.drink === true;
  const dessertEnabled = !allEnabledByOthersNotActive && props.categoryFilters.dessert === true;

  return (
    <div className="categories col-md-6">
      <h4 className="heading-4">Categoría</h4>
      <ul className="categories-box clearfix">
        <li>
          <button onClick={props.clickAllFilter} className={allEnabled ? 'active' : ''}>
            Todo
          </button>
        </li>
        <li>
          <button onClick={props.clickMainDishFilter} className={mainDishEnabled ? 'active' : ''}>
            Plato principal
          </button>
        </li>
        <li>
          <button onClick={props.clickDrinkFilter} className={drinkEnabled ? 'active' : ''}>
            Bebidas
          </button>
        </li>
        <li>
          <button onClick={props.clickDessertFilter} className={dessertEnabled ? 'active' : ''}>
            Postre
          </button>
        </li>
      </ul>
    </div>
  );
}
