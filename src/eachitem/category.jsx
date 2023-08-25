import CategoryBox from "../util/CategoryBox"

function EachCategory({ category, categoryClick, type }) {
  const onChange = checked => {
    categoryClick(category.name, checked);
  }
  return (
    <CategoryBox
      id={category.name}
      name={category.name}
      checked={category.isChecked}
      onChange={onChange}
      type={type}
    >
    {category.name}
    </CategoryBox>
  )
}

export default EachCategory
