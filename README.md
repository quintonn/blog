# InstaBlog
Instant Blog Creator. 

Quickly and easily create a new blog without any code or infrastructure.

# Getting Started
To create your own blog for free with github, follow the following steps.  
The following steps assume you already have a github account and understand some basic git terminology.

1. Fork this repository (Fork button near the top right of this page).
3. Inside the **info** folder are files for the site's name, about page and contact page.
4. The actual data for your blog posts are inside the **content** folder.
5. Each blog entry will have 2 items in this folder:
    1. An entry in the **items.json** file.
    2. A folder with the same name as the **name** field in the items.json file  .
       The folder name should be lower case and spaces be replaced with an underscore "_", e.g. "my_first_blog_post".  
       Inside this folder there should be at minimum an **index.html** file.
7. You probably want to remove the example post from your repository.  
   To do this, remove the "sample/example_post" folder.  
   You can always refer back to this repository if you need to.  
   You also need to remove the Example Post entry from the items.json file mentioned in earlier steps.
6. When you are ready to share your blog and make it available, perform the following:
    1. Make sure your github repository is a public and not a private repository.
    2. In your github repository's settings page, scroll down to find the "GitHub Pages" section and change the "Source" value to **master branch**, or another value if you understand what you are doing.
7. Star this repository if you enjoy creating your blog using this framework and/or if you want to be aware of any change or improvements to this repository, which could in-turn benefit your blog.
  
For more information on how to add and style content inside the index.html file for each blog entry, see the example post in [this repository](https://quintonn.github.io/InstaBlog/#!/entry/sample/Example_Post).
