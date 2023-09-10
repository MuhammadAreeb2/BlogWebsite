
import Navbar from "../navbar/[id]/navbar"
import Blogs from "./blogs";

function BlogPage() {
    return (
        <>
            <div className="flex">
                <div>
                    <Navbar />
                </div>
                <div>
                    <Blogs />
                </div>
            </div>
        </>
    )
}
export default BlogPage