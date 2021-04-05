const { getFilesOf, getDirectoriesOf, removePriority } = require('./src/utils');
const { CATEGORY_SLUGS, SUB_CATEGORY_SLUGS } = require('./src/constants');

const categories = getDirectoriesOf('docs');
console.log('categories', categories);
const getSubCategories = category => getDirectoriesOf(`docs/${category}`);

const createSubCategoryItem = (category, subCategory) => ({
  type: 'category',
  label: SUB_CATEGORY_SLUGS[removePriority(subCategory)],
  items: getFilesOf(`docs/${category}/${subCategory}`).map(
    fileName => `${category}/${subCategory}/${fileName}`,
  ),
});

console.log('categories', categories);
const sidebarData = categories.reduce(
  (sidebars, category) => ({
    ...sidebars,
    [category]: getSubCategories(category).map(subCategory =>
      createSubCategoryItem(category, subCategory),
    ),
  }),
  {});

console.log('sidebarData', sidebarData);
module.exports = sidebarData
