import SideBar from "../sideBar";
const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SideBar>{children}</SideBar>
    </div>
  );
};

export default Layout;
