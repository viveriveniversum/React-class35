import NavItem from "./NavItem.js";

function Navbar({ categories, changeCategory }) {
  return (
    <ul className="navlist">
      {categories.map((category, index) => (
        <NavItem
          key={index}
          category={category}
          changeCategory={changeCategory}
        />
      ))}
    </ul>
  );
}

export default Navbar;
