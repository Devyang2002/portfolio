const Links = () =>{
    const items = ["Homepage","Services","Projects","Skills","Testimonials"];

return(
    <div className="links">
        {items.map((item)=>(
            <a href={`#${item}`} key={item}>
                {item}
            </a>
            )
        )}
    </div>
);
};

export default Links;