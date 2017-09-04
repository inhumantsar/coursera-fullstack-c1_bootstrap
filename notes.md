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


### Navigation

* Outer div: `.navbar`
  * Modifiers:
    * `.navbar-inverse` - light on dark theme
    * `.navbar-toggable-<size>` - Collapse behind a toggle on screens sized `size` and smaller.
* Inner div: `.container`
* Content elements:
  * `.navbar-brand` - logo/title link, eg: an `<a>`
  * `.navbar-nav` - unordered list of `nav-item`'s and `nav-link`'s
  * `.navbar-toggler` - button used with `data-toggle="collapse"` and `data-target="#<navbar-id>"`
  * `.navbar-collapse` - used with `.collapse` on a div wrapping the `.navbar-nav` element with <navbar_id>.

### Icon Fonts
* `i.fa i.fa-<icon>` - dynamically inserts icon font letters when font-awesome is installedl

### Navigation Resources

#### General

- [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) (Accessibility support and screen reader support)

#### Information Architecture

- [Information Architecture 101: Techniques and Best Practices](http://sixrevisions.com/usabilityaccessibility/information-architecture-101-techniques-and-best-practices/) (Quick introduction to Information architecture with respect to website design)
- [Web Site Information Architecture models](http://webdesignfromscratch.com/website-architecture/ia-models/) (Another good resource on information architecture)
- [What is information architecture?](http://www.steptwo.com.au/papers/kmc_whatisinfoarch/) (Good definition and explanation about the topic)
- [Information Architecture Tutorial](http://www.webmonkey.com/2010/02/Information_Architecture_Tutorial/) (Comprehensive look from a website design perspective)

#### Navigation Bar Design

- [Designing A Winning Navigation Menu: Ideas and Inspirations](http://www.hongkiat.com/blog/navigation-design-ideas-inspiration/) (Good suggestions on how to design navigation for a website)
- [Are You Making These Common Website Navigation Mistakes?](https://blog.kissmetrics.com/common-website-navigation-mistakes/) (Worth reading at least to learn what not to do)
- [3 Reasons We Should Stop Using Navigation Bars](http://www.webdesignerdepot.com/2014/01/3-reasons-we-should-stop-using-navigation-bars/) (A provocative view on navigation bars)

#### Breadcrumbs

- [Breadcrumb Navigation Examined: Best Practices & Examples](http://www.hongkiat.com/blog/breadcrumb-navigation-examined-best-practices-examples/) (Great suggestions on using breadcrumbs for navigation)
- [Breadcrumb Navigation: A Guide On Types, Benefits And Best Practices](http://blog.woorank.com/2014/11/breadcrumb-navigation-guide/) (Another great resource on types and usage of breadcrumbs)

#### Icon Fonts

- [Why And How To Use Icon Fonts](http://vanseodesign.com/web-design/icon-fonts/) (a good overview of icon fonts)
- [Icon Fonts are Awesome](https://css-tricks.com/examples/IconFont/) (another good introduction to icon fonts)
- [Font Awesome](http://fontawesome.io/) (one of the most popular icon fonts)
- [Get started with FontAwesome](http://fontawesome.io/get-started/) (good official help)
- [Bootstrap-Social](http://lipis.github.io/bootstrap-social/)
- [The Final Nail in the Icon Fonts Coffin?](http://www.sitepoint.com/final-nail-icon-fonts-coffin/) (a controversial opinion piece on icon fonts)
- [Using SVGs](http://gomakethings.com/using-svgs/) (alternative to icon fonts)


### Buttons

* Outer div: `.btn-group` used with `role="group"`
* Content: <a> or <button>, `.btn` (also optionally `btn-<colour>`), and `role="button"`
* Well-paired with icon fonts


### Forms

* Outer `<form>`
* Inner div `.form-group`
* Content:
  * `<label>` with `.col-form-label` automagically forms a well-sized label for its paired input element.
  * `.form-control` - for form elements
  * `.input-group` w/ `.input-group-addon`'s'- use additional elements to dress up a field
  * `.form-check - for checkboxes`

### Tables
* Outer div: `.table-responsive`
* `<table>` - `.table`
  * Modifiers:
    * `.table-stripes` - alternating stripes of color
    * `.thead-inverse` - dark theme

### Cards
* Outer div: `.card`
* Content:
  * `.card-header` - For <h#> elements
  * `.card-block` - For divs containing the main card content.

### Badges
* `.badge` to create superscript tags on blocks.
* `.badge-pill` to give it a button like background


## Bootstrap Javascript Components
* JQuery-based plugin system
* Designed to encapsulate functionality into reuable components
* Included at the bottom (preferably from a CDN) with the jquery, tether, and bootstrap imports.
* `data-toggle`, `data-target`, `data-spy`


### Tabs and Pills
* Usable tabbed navigation anywhere.
* Outer `ul`: `.nav .nav-tabs|.nav-pills`
* Inner `li`'s: `.nav-link role="tab" data-toggle="tab" href="#target"`, optionally `.active`
* Content `div`'s:
  * Outer: `.tab-content`
  * Inner: `role="tabpanel" .tab-pane`.
    * Modifiers:
      * Animations. eg: `fade`
      * Start shown: `.show` `.active`
      *

### Collapse and Accordion
* Toggle content visibility using a button or link
* Outer `div`: `#target role="tablist"`
* Inner `div`'s:
  * Container (eg: `.card`)
  * Toggle link/header: `data-toggle="collapse" data-parent="#target" href="#content"`
  * Content `div`: `#content .collapse role="tabpanel"`
    * Wraps normal inner divs (eg: `.card-block`)

### Tooltips
* Link with `data-toggle="tooltip" data-html="true" title="<tooltip text>"`
  * Modifiers: `data-placement="<placement>"`
  * Requires:
    ```javascript
    <script>
        $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
         });
    </script>
    ```

### Modals
* Trigger link: `data-toggle="modal" data-target="#target"`
* Outer `div`: `.modal role="dialog"`
* Inner `div`'s:
  * Wrapper: `.modal-dialog .modal-<size> role="content"`
  * Content: `.modal-content`
      * `.modal-header`
        * `h#.modal-title`
        * Close button: `<button type="button" class="close" data-dismiss="modal">&times;</button>`
      * `.modal-body`
      * `.modal-footer`

## Carousel
* Outer `div`: `.carousel data-ride="carousel"`
* Innter `div`: `.carousel-inner role="listbox"`
* Content `div`'s: `.carousel-item` optionally `.active`
* Indicator `ol`: `li`'s: `data-target="#target" data-slide-to="#"`
* Control links: `.carousel-control-prev|next href="#target"`
  * Inner `span`: `.carousel-control-[prev|next]-icon`

## Misc Modifiers
* `bg-<colour>` - sets background color to the named Bootstrap colour
