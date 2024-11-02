export const addPost = async (formData)=>{
    "use server"

    // basic method for extracting form input values
    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")
    // const userId = formData.get("userId")
    
    // restructuring method
    const {title, desc, slug, userId} = Object.fromEntries(formData);

    console.log(title, desc, slug, userId)


    
    
}