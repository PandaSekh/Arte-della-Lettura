<h1 align="center">
  Arte della Lettura
</h1>
<p align="center">
  <img src="/public/panda-logo.png?raw=true" width="250" >
</p>  
<p align="center">
  
</p>
<p align="center"><em>Personal Book Review Blog</em></p>

Arte della Lettura is my personal blog where I review books since 2018. I started with Blogger, then moved to Wordpress and now I finally decided to move to a completely self-made solution built with Next.js (React), TailwindCSS and MDX.

## Why
As stated in the introduction, this website was previously hosted on Wordpress. While Wordpress is great for many things, I hated not being able to do any customization (I don't know PHP and I have no intention to learn it). 
Also, to have a decent website I have to spend some money, which isn't great for a hobby website with no ads.

So, I decided to remake my blog from the ground up.

## The tech stack
<p align="center">
  <img src="/neat.jpg" >
</p>
- Next.js - Frontend framework to make React actually usable in production
- TailwindCSS - Seemed great to reduce the css size, as classes are reused across the whole website. Also, easy dark mode
- MDX - To make cool posts, without MDX this blog wouldn't be possible (think of this like wordpress hooks)
- GitHub - I use GitHub for a lot of things, like comments
- Supabase - Used for the free database only
- Framer Motion - To make the website feel less boring

## Why did I decide to store -almost- everything on git?

<p align="center">
  <img src="https://media1.tenor.com/images/a3d9fc252280b3b89419b1bb728e8f2d/tenor.gif" >
</p>

Saving things costs money.
This blog is an hobby, I don't want to make money off of it, so every penny spent is a penny lost.
As such, I wanted to design this website to be as cheap as possible. 
The best solution I found is to save everything as a JSON on GitHub. This means that I don't have relational data, but for this use case that is easily solved.
By going this route I also get the additional advantage to have everything stored in one place and under my control.

Unfortunately, to make reactions usable I had to rely on a database. I used [Supabase](https://supabase.io/), which has a generous free plan and as such I'm currently able to not spend any money on this.
