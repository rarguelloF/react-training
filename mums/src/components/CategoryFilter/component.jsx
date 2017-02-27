import React from 'react';


export default function CategoryFilter(props) {
  const { mainDish, drink, dessert } = props.categoryFilters;

  const allEnabledByOthersNotActive = (!mainDish && !drink && !dessert);
  const allEnabledByOthersActive = (mainDish && drink && dessert);

  const allEnabled = allEnabledByOthersNotActive || allEnabledByOthersActive;
  const mainDishEnabled = !allEnabledByOthersNotActive && mainDish;
  const drinkEnabled = !allEnabledByOthersNotActive && drink;
  const dessertEnabled = !allEnabledByOthersNotActive && dessert;

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
