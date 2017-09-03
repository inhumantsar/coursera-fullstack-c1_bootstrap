### Grid system

* Responsive
* Fluid
* Mobile-first

#### viewport meta tag
* `... content=width=device-width,initial-scale=1,shrink-to-fit=no`
* Ensures the screen width is set to the device's actual screen width.

#### CSS Flexbox
* Handles dynamic content container
* Direction-agnostic
* Easy vert alignment
* Easy to adapt to screen sizes
* CSS-only equal height columns

#### Usage

Layers:
1. Outer `.container` or `.container-fluid`
  * `.container` has one fixed width for each screen size in bootstrap (xs,sm,md,lg); `.container-fluid` expands to fill the available width.
1. `.row` containers
1. Individual columns `.col-<num>`, `.col-<size>-<num>` where max num is 12
  * Sizes:
    * Default targets all sizes
    * `sm`, `md`, `lg`, `xl`
    * `.col-sm-5` will take up 5 of the 12 available columns
  * Auto layout:
    * Leave out `<num>` to let bootstrap automatically divide the screen.
    * eg: 3x `.col-sm` will put three columns on each row for small screens.
    * eg: 1x `.col-sm-6` and 2x `col-sm` will give the auto-layout columns a width of 3 each.

#### Default grid settings:
* Collapsed grid, Horizontal above breakpoints
* 12 columns
* 15px gutters on each side of a column
* Nestable, offsetable
* `xs`: <576px
  * Stacked at all times.
  * Auto-width
* `sm` >= 540px
* `md` >= 720px
* `lg` >= 960px
* `xl` >= 1140px

#### Column Modifiers:
* `.[pull|push]-<size>-<num>`: Pull (to the left) or push (to the right) this container `<num>` columns.
* `.flex-<size>-[first|last]`: Ensure a column is leftmost or rightmost.
* `.offset-<size>-<num>`: Right-shift column by `num` columns
* `.align-self-center`: Vertically aligns a column's content to the center

#### Row Modifiers:
* `.align-items-<alignment>`: Vertically align all columns in a row according to `alignment`.
* `justify-content-<alignment>`: Aligns content horizontally.
  * eg: Using `center` on a collection of small or `col-auto` columns would ensure that all columns are pulled to the center, leaving margins on the left and right.

#### Nesting
* Add a new row within a column of any size to create a new 12-column row.

#### Responsive Design and Bootstrap Grid Resources

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox/) (W3C Documentation)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [The Bootstrap 4 Grid: What's New?](http://tutorialzine.com/2016/11/boostrap-4-regular-vs-flex-grid/)
- [How the Bootstrap Grid Really Works](http://blog.codeply.com/2016/04/06/how-the-bootstrap-grid-really-works/)
- [The Subtle Magic Behind Why the Bootstrap 3 Grid Works](http://www.helloerik.com/the-subtle-magic-behind-why-the-bootstrap-3-grid-works) (a detailed explanation of why the Bootstrap grid system works the way it does, a delight to read!)
- [What The Heck Is Responsive Web Design?](http://johnpolacek.github.io/scrolldeck.js/decks/responsive/) (a short presentation that introduces responsive web design)
- [Beginner’s Guide to Responsive Web Design](http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design) (simple introduction to responsive web design)
- [The 2014 Guide to Responsive Web Design](http://blog.teamtreehouse.com/modern-field-guide-responsive-web-design) (an updated guide to responsive design)
