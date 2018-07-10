# Awesome Cat Giph Generator!

This application uses the Giphy API to find awesome cats. 

```javascript
 $('img').on('click', function() {
      var animatedUrl = $(this).attr('animated');
      var stillUrl = $(this).attr('still');
      var state = $(this).attr('state');
      if (state === 'still') {
        $(this).attr('state', 'animated');
        $(this).attr('src', animatedUrl);
          
        }

        else {
          $(this).attr('state', 'still');
        $(this).attr('src', stillUrl);
        }

    });
```

This app uses an click handler on the image that looks at the state attribute to determine whether the clicked on giphs is playing, and if so changes the state to still.

![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)