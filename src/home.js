import Blogslist from "./Blogslist";
import useFetch from "./useFetch";


const Home = () => {
    const { data: blogs, isPend, error } = useFetch('http://localhost:8000/blogs');


    // NOW when we change the value react is unable to react or it is 
    // not able to re-render the page with a new value
    // and we continue to see the old value inside the browser
    // To make this we have to make the value reactive
    // Then it can re-render the template where we output the value
    // to do this , we use a hook 
    // That hook is called use state

    return (
        <div className="home">
            {error && <div> {error}</div>}
            {isPend && <div> Loading....</div>}
            {blogs && <Blogslist blogs={blogs} title="Blogged Out " />}
            {/* filtering using props*/}
            {/*<Blogslist blogs={blogs.filter((blog) => blog.author === 'Aditya')} title="Aditya blog" /> */}
            {/*<button onClick={() => setName('Afor')}>Change name</button>
            <p>{name}</p> */ }
        </div>
    );
}

export default Home;