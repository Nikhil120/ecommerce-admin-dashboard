import { Poppins } from "next/font/google";
const Font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});
import Sidebar from "./Sidebar/sidebar";
function Layout({ children }) {
  return (
    <div className={`flex ${Font.className}`} id="layout">
      <Sidebar />
      {children}
    </div>
  );
}
export default Layout;
