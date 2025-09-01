import NavLinkItem from "./NavLinkItem";

const NavLinks = ({ onClick }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
      <NavLinkItem to="/#section-services" label="Nos expertises" onClick={onClick} />
      <NavLinkItem to="/catalog" label="Catalogue" onClick={onClick} />
      <NavLinkItem to="/#section-publications" label="Publications" onClick={onClick} />
      <NavLinkItem to="https://www.accel-tech.net/" label="Découvrez ACCEL Tech" onClick={onClick} external />
    </div>
  );
};

export default NavLinks;
