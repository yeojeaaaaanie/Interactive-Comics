# Interactive-Comics
Interactive Comics Project for 'INTM-SHU 120 Communications Lab'

http://imanas.shanghai.nyu.edu/~th2158/week06/v12/

Above is the link for our Interactive Comics Project.

We made a Chinese folk story 'Ma Liang and the Magic Brush' into comics. We were lucky enough to find a storytelling video of the story on Youtube and cropped characters from it using Adobe Photoshop. Each scenes were later made by inserting these cropped characters or objects into photos found online for background images.

Main tools for interaction was scroll and onclick. As the users scroll down, panels will fade up and brush strokes that link each panels will be wiped down. We found a useful animation library ("aos-master") online and used it to give fading animation on panels. For stroke wiping effect, we used Javascript setInterval() and changing position of the object covering the stroke until specific value and finally making its visibility hidden. We told the Javascript when to do such animation by getting the y coordinate of the scroll and comparing it to the y positions of each panels. Specific codes are attached below. Animation effect on Ma Liang's drawings turning into real objects was coded using onclick() and changing the source of image in Javascript.
We shared the codes on Google Drive every time we updated them. We tried to use one computer at a time not to miss any added elements. We built the basics together, and after that I worked more on the animation effects and Thomas finished layouts and designs.

Initially, we came up with all different ideas for interactivity. We were suggested to let users click/drag certain objects on the panel so that it seems like they have drawn the object with Ma Liang. We also tried to give brush stroke effect on writing the title and the footer. I found an open-source library that includes the exact same thing that I wanted to do but couldn't separate certain part from other unnecessary effects. It would be great if I can make the comics start and end with the animation of writing the title in brush stroke style.

Another thing we had to give up at the end was the background texture. We found a classic Chinese paper background, but the pattern was not uniform throughout the image, and, thus, the animation effect of wiping down stroke by moving the above layer with the same background pattern was noticeable. At last, we had to give background color of similar style.

Basically, giving animation effects on scroll was the most challenging part of the project. I had to look up tips, useful functions, and/or libraries online to make the codes simpler yet powerful. Although the animations are still rough and not all the elements are properly resizable, we could complete the comics project on time. I would love to work more on Javascript animations and CSS properties to refine above-mentioned parts. Yet it has been a successful and meaningful project.

Images for characters are cropped from the animation found on Youtube (https://www.youtube.com/watch?v=VWBM52B9G2A) and backgrounds are brought from various pages found on Google. We would like to thank Professor Moon, Dave, and Brian for helping us structure the website with codes using HTML/CSS and Javascript.


