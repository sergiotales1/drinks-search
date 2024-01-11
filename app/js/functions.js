// clean data for [id] view
export const viewDataCleaner = (data) => {
  const title = data.strDrink;
  const image = data.strDrinkThumb;
  const category = data.strCategory;
  const instructions = data.strInstructions;

  const dataEntries = Object.entries(data);
  const ingredients = dataEntries
    .filter((el) => el[0].startsWith('strIngredient') && el[1] !== null)
    .map((ing) => ing[1]);

  const viewData = {
    title,
    image,
    category,
    instructions,
    ingredients,
  };
  return viewData;
};

// get data for [id] view

export const getData = async (params) => {
  const searchId = params.id;
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  const response = await fetch(url + searchId);
  const { drinks } = await response.json();
  return drinks[0];
};

// fetch search data
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function fetchData(search) {
  try {
    const response = await fetch(url + search);
    console.log(response);
    const data = await response.json();
    if (data.drinks === null) return;
    return data;
  } catch (err) {
    console.err(err);
  }
}
