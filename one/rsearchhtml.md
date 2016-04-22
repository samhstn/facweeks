# What is the DOM ?

## Know the structure of an HTML document

### What is HTML?

HTML is how computers speak to each other over the internet. Websites or the DOM interprets what they say.

HTML is “spoken” by two computers:
The Client which is used by the person surfing the net.
The Server which stores and distributes websites over the net.

### Doctype declaration

If we open a webpage and view the “source code” (Command + Alt + U) the top of the page will have the doctype declaration.

It’s good HTML grammar to have this at the top because we should specify what html we are using

<!DOCTYPE html> means “this page is written in HTML5”.

`<!DOCTYPE html>`
First element and comes before any html even html tags. It can specify other markup languages. HTML5 does not require a reference a DTD (document type definition).

The `<!DOCTYPE html>` declaration must be the very first thing in your HTML document, before the <html> tag.
The `<!DOCTYPE html>` declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
In HTML 4.01, the `<!DOCTYPE html>` declaration refers to a DTD, because HTML 4.01 was based on SGML. The DTD specifies the rules for the markup language, so that the browsers render the content correctly.

### html tag

This is our first “tag”.

With a couple of exceptions a “tag” has to be opened and closed. Tags are containers, for example everything between the opening html tag <html> and the closing html tag </html> conforms to the standards of the type of HTML dictated by the doctype declaration.

Everything between the opening tag and closing tag are inside that tag and therefore have the attributes that tag gives them.

Inside the <html> tag we have two important tags:
<head> tag and <body> tag

### head tag

Web sites have two audiences:
	Humans
	“spiders”, “bots” or “web crawlers”

The contents of the head tag displays little to humans, but it’s important to the bots. The single most important thing you can do for SEO is write a good title tag.

### meta tag￼

The other tag that go in the head tag is the meta tag <meta charset=“utf-8”>
Tells you what language your page is written in, use the meta tag above if you are writing your page in english.
description meta tag <meta name=“description” content=“The head tag contains the title and meta tags”>

Note the meta tags do not need closing in HTML5.

### body tag

The body tag contains the code that generates what is seen in a browser.

### heading tags

They work <h1> through to <h6>  with <h1> the largest tag. What you have in your heading tags is also important in SEO.

Google ranks “relevancy” in a number of ways. Heading tags are one of the ways taken into consideration. It assumes the contents of the <h1> tags are more important than <h2> tags.

### paragraph tag

The <p> tag is probably the handiest and most commonly used tag.
Next is the <ul> <ol> and <li> tags

### definitions list tag
￼
<dl> tags. Work in a similar way to <li> tags. It is good for formatting in these ways:

John Doe
	123 Main St.

Question?
	Answer

### anchor tags

Hyperlinks, or links, are how you move around the web. An a or anchor tag is how you make hyperlinks in HTML. They look like this:

<a href="http://www.html-5-tutorial.com/a-tag.htm">a tag</a>

### table tags
