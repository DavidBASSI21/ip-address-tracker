# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![![Screenshot initial page load desktop view](image.png)](../ip-tracker/src/assets/screenshots/screenshot-1.png)
![![Screenshot search by domain name desktop view](image.png)](../ip-tracker/src/assets/screenshots/screenshot-2.png)

![![Screenshot initial page load mobile view](image.png)](../ip-tracker/src/assets/screenshots/screenshot-4.png)
![![Screenshot search by domain name mobile view](image.png)](../ip-tracker/src/assets/screenshots/screenshot-3.png)


### Links

- Live Site URL: [https://ip-tracker.surge.sh/](https://ip-tracker.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React leaflet 
- Ipify API

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This project mostly helped me understand how to insert a map on a project and how to interact with it

```js
 <MapContainer
      center={position}
      zoom={13}
      zoomControl={false}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <ChangeView center={position} />
      </Marker>
    </MapContainer>
```

### Useful resources

- [React Leaflet Documentation](https://react-leaflet.js.org/) - This helped me understand how to use and interact with the map component

