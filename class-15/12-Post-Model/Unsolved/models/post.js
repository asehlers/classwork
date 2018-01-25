module.exports = function(sequelize, DataTypes) 
{
    console.log("post.js initial");
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining
    var Post = sequelize.define("Post", 
    {
        title: 
        {
            type: DataTypes.STRING,
            validate: 
            {
                len: [1, 160],
                allowNull: false
            }
        },
        body:
        {
            type: DataTypes.TEXT,
            validate: 
            {
                len: [1],
                allowNull: false
            }
        },
        category:
        {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        }
    });
    console.log("post.js return");
    return Post;
};


