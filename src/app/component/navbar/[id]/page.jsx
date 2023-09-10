import MyBlog from "../../blogspost/myblogs/myblogs";
import Navbar from "./navbar";

function NavbarPage() {
    return (
        <>

        <div className="flex">
            <div>  <Navbar /></div>
            <div>  <MyBlog/></div>
        </div>
          
          
        </>
    )
}
export default NavbarPage