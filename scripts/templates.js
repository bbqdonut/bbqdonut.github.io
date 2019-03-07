let header = `<header>
      <div id="logo">
        <div id="logo-top">
          Water
        </div>
        <hr id="logo-top2mid" />
        <div id="logo-mid">
          BBQ
        </div>
        <hr id="logo-mid2bottom" />
        <div id="logo-bottom">
          BBQ with a view
        </div>
      </div>
      <div id="menu">
        <div id="menu-top">
          <ul>
            <li><span><img src="img/icon_letter.png" /></span>info@waterbbq.com</li>
            <li><span><img src="img/icon_telephone.png" /></span>06 26245857</li>
          </ul>
        </div>
        <div id="menu-bottom">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="reserveren.html">Reserveren</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div id="header-content">
        <div id="header-content-left">
          <div>
            <p>Welkom!</p>
            <p>Stap aan boord bij onze BBQ Donut Boot voor een unieke vaartocht in Amsterdam.</p>
          </div>
          <!-- To do: Google Review -->
        </div>
      </div>
    </header>`


let footer = `<footer>
      <div id="footer-menu">
        <ul>
          <li>Reserveren</li>
          <li>Bezienswaardigheden</li>
          <li>Arrangementen</li>
          <li>Contact</li>
        </ul>
      </div>

      <p>Water BBQ</p>

      <p>P. Hans Frankfurthersingel 15  I   1069 MC Amsterdam</p>

      <p>06 26245857</p>

      <div id="footer-icons">
        <img src="img/icon_facebook.png" />
        <img src="img/icon_instagram.png" />
        <img src="img/icon_tripadvisor.png" />
      </div>

      <p>info@waterbbq.com</p>
    </footer>`

function injectHTML(){
  console.log('injectHTML')
  let content = document.getElementById('nl')

  let headerParent = document.createElement('div')
  headerParent.innerHTML = header
  headerParent.classList.add("injected");
  content.insertBefore(headerParent, content.firstChild)

  let footerParent = document.createElement('div')
  footerParent.classList.add("injected");
  footerParent.innerHTML = footer
  content.appendChild(footerParent)
}

// function injectHTML(){
//   console.log('injectHTML')
//   let content = document.getElementById('nl')
//   let currentHTML = content.innerHTML
//   content.innerHTML = header + currentHTML + footer
//   document.body.removeChild(nl)
//   document.body.appendChild(content)
// }

injectHTML()
