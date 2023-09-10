
import Navbar from "../../navbar/[id]/navbar"
import AddBlogs from "./add";


function MyBlogAddPage() {
    return (
        <>
            <div className="flex">
                <div>
                    <Navbar />
                </div>
                <div>
                    <AddBlogs />
                </div>

            </div>
        </>
    )
}
export default MyBlogAddPage