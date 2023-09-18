class BlogDTO{
    constructor(blog){
        this._id =  blog._id;
        this.title =  blog.title;
        this.category =  blog.category;
        this.shortDescription =  blog.shortDescription;
    }
}

module.exports = BlogDTO;