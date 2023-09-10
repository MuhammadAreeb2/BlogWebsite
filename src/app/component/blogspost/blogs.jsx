import AddBlogs from './addblog/add'
import MyBlog from './myblogs/myblogs'
import './blogs.css'
function Blogs() {

    return (
        <>
            <div>

                <AddBlogs />

                <div className='my-96 ' >
                    <MyBlog />
                </div>
            </div>

        </>
    )
}
export default Blogs