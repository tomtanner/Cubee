import { useState } from "react";
import cn from "classnames";
import { MdAdd } from "react-icons/md";

import "./styles/styles.scss";

const FAB = ({ actions }) => {
  const [open, setOpen] = useState(false);

  // Set open state to true if user hover over "ul" element 
  const mouseEnter = () => setOpen(true);

  // Set open state to false if user hover out of "ul" element 
  const mouseLeave = () => setOpen(false);

  return (
    <ul
      className="fab-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <li className="fab-button">
        <MdAdd />
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn("fab-action", { open })}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FAB;