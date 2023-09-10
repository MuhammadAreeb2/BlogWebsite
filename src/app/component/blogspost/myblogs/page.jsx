
import Navbar from "../../navbar/[id]/navbar"
import MyBlog from './myblogs'

function MyBlogPage() {
    return (
        <>
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <MyBlog />
                </div>
            </div>
        </>
    )
}
export default MyBlogPage