const MenuBar = ({ onChangePage, onLogout }) => {
    return (
      <nav>
        <button onClick={() => onChangePage("Tasks")}>Tasks</button>
        <button onClick={onLogout}>Logout</button>
      </nav>
    );
  };
  
  export default MenuBar;
  