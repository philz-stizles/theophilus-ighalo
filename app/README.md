# Theophilus Ighalo's Portfolio App

## Table of Contents

(1.) [Setup Next JS App](#setup-next-js-app)
(2.) [Setup Headless CMS using Strapi](#setup-headless-cms-using-strapi)

### Setup Next JS App

    cd app

    npx create-next-app . --typescript

### Setup Headless CMS using Strapi

    cd cms

    npx create-strapi-app@4.10.4

    yarn develop

    http://localhost:1337/admin

    npm i styled-components
    npm i --save-dev @types/styled-components

    <!-- Integrate Strapi to frontend app -->

    cd app

    yarn add @types/negotiator negotiator @types/qs qs classnames react-icons react-markdown react-slideshow-image remark-gfm @formatjs/intl-localematcher
