Done a bit of the work, a lot still left to do:

1. Used AcuWeather to get the weather conditions. They offer several services, but none offer the current weather and an hourly forcast, that would have been an extra call, it can be easily added if needed.
2. The news section was supposed to include a carousel, but I had some issues with it on iPad so I pulled it and left the one article.
3. The financial section doesn't move a dot, it changes the data source for the graph. I have to look through the documentation a bit more to figure out how to move a dot, what that would represent, etc.
4. I added some media queries for tablet (could maybe do better here), phone is still to be done. Also, I would maybe render some things conditionally (i.e. not render the news widget, since it would fetch data and no need to do that since it's not gonna be show, or render different components for the financial widget, since CSS alone would complicate issues there)
5. The weather "icons" are not all sorted out. AcuWeather has a system of icons, but I couldn't access their icons and didn't want to spend too much time mapping other icons to their, so I just mapped a few. When it doesn't find the one it needs, it defaults to Sunny :)
