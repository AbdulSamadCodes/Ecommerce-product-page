import { navLinks } from '/src/Constant/index.js';

function NavbarList({styles}) {
  return (
    <ul className={`${styles.join('')}`}>
      {navLinks.map((navLink) => {
        const { id, title } = navLink;

        return <li
          className="nav__item"
          key={id}>
          <a href="#" className="nav__link">{title}</a>
        </li>
      })}
    </ul>
  );
}

export { NavbarList };