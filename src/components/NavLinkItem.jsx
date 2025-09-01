import { Link as RouterLink } from "react-router-dom";

const NavLinkItem = ({ to, label, onClick, external }) => {
  const base =
    "relative group inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm md:text-[15px] font-semibold uppercase tracking-wide transition";
  const text =
    "text-[#1C2452] hover:text-[#26509e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26509e]/50";
  const afterBar =
    "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#26509e] after:transition-all after:duration-300 group-hover:after:w-3/4";

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      if (onClick) onClick();
    }
  };

  // Lien externe
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
      >
        {label}
      </a>
    );
  }

  // Lien avec scroll (id commençant par #)
  if (to.startsWith("#")) {
    return (
      <RouterLink
        to={to}
        onClick={(e) => handleScroll(e, to.replace("#", ""))}
        className={`${base} ${text} ${afterBar}`}
      >
        {label}
      </RouterLink>
    );
  }

  // Lien normal (ex: /catalog)
  return (
    <RouterLink to={to} onClick={onClick} className={`${base} ${text} ${afterBar}`}>
      {label}
    </RouterLink>
  );
};

export default NavLinkItem;
