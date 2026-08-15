type MenuLinksProps = {
  items: string[];
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
};

const MenuLinks = ({ items, variant, onItemClick }: MenuLinksProps) => {
  if (variant === "desktop") {
    return (
      <ul
        className="
          hidden md:flex
          justify-center items-center gap-8 list-none
        "
      >
        {items.map((item) => (
          <li key={item} className="flex flex-col items-center cursor-pointer">
            {/* bolinha */}
            <div className="w-[5px] h-[5px] rounded-full bg-transparent mb-1 transition-all group-hover:bg-blue-500" />

            <a
              href={`#${item}`}
              className="
                text-gray-600 uppercase font-medium
                transition-all hover:text-blue-500
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2 w-full">
      {items.map((item) => (
        <li key={item} className="w-full py-3">
          <a
            href={`#${item}`}
            onClick={onItemClick}
            className="
              text-gray-600 uppercase  text-xl
              hover:text-blue-600 transition-all block w-full
            "
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
