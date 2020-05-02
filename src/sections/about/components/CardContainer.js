import React from "react"
import Card from "./AnimatedCard.js"
import ListItem from "./ListItem"
import Browser from "../utils/frontIcon"
import Database from "../utils/Database"
import Network from "../utils/Network"
import theme from "../../../components/theme"

import ReactIcon from "../utils/ReactLogo"
import HtmlIcon from "../utils/Html5"
import DjangoIcon from "../utils/Django"
import NodeIcon from "../utils/Node"
import AmazonLogo from "../utils/AmazonLogo.png"
import HerokuLogo from "../utils/heroku"
import CssLogo from "../utils/css3"
import NetlifyLogo from "../utils/netlify"

const Techno = {
  django:
    "Django est un framework python. Il est très efficace pour construire un projet sécurisé et performant rapidement. ",
  node:
    "Node est un environnement javascript apprécié pour sa rapidité de fonctionnement et sa scalabilité.",
  css: "Css est le language utilisé pour styliser les éléments des pages web.",
  html:
    "Html est le language de programmation permettant d'afficher des éléments sur une page web.",
  react:
    "React est une bibliothèque front-end développée par Facebook en 2013. C'est la technologie la plus utilisée dans le développement web depuis 2018. ",
  aws:
    "AWS est la plateforme d'hébergement cloud la plus utilisée au monde. Elle permet de gérer l'ensemble des défis techniques rencontrés en production.",
  heroku:
    "Heroku est une plateforme d'hébergement de site web particulièrement apprécié pour sa facilité d'utilisation.",
  netlify:
    "Netlify est une plateforme d'hébergement de site web statique. Elle sera utilisée pour les sites vitrines ou autres sites ne nécéssiatant pas de serveur.",
}

function CardContainer() {
  return (
    <div className="card_container">
      <Card
        color={theme.grey}
        elevation={6}
        textLength={Techno.django.length + Techno.node.length}
        childrens={2}
        frontFace={
          <>
            <Database />
            <h3 style={{ marginTop: 10 }}>
              <div class="text">Back-end</div>
            </h3>
          </>
        }
        backFace={
          <div class="back_container">
            <ListItem
              icon={<DjangoIcon />}
              text={Techno.django}
              name="Django"
            />
            <ListItem icon={<NodeIcon />} text={Techno.node} name="Node.js" />
          </div>
        }
      />
      <Card
        color={theme.grey}
        elevation={6}
        childrens={3}
        textLength={
          Techno.css.length + Techno.html.length + Techno.react.length
        }
        frontFace={
          <>
            <Browser />
            <h3 style={{ marginTop: 10 }}>
              <div class="text"> Front-end</div>
            </h3>
          </>
        }
        backFace={
          <div class="back_container">
            <ListItem
              icon={<ReactIcon />}
              text={Techno.react}
              name="React.js"
            />
            <ListItem icon={<HtmlIcon />} text={Techno.html} name="Html 5" />
            <ListItem icon={<CssLogo />} text={Techno.css} name="Css 3" />
          </div>
        }
      />
      <Card
        color={theme.grey}
        elevation={6}
        childrens={3}
        textLength={
          Techno.aws.length + Techno.heroku.length + Techno.netlify.length
        }
        frontFace={
          <>
            <Network />
            <h3 style={{ marginTop: 10 }}>
              <div class="text"> Devops</div>
            </h3>
          </>
        }
        backFace={
          <div class="back_container">
            <ListItem
              icon={
                <img
                  src={AmazonLogo}
                  alt="Logo Amazon"
                  width="50"
                  height="40"
                  margin="0"
                  style={{ minHeight: 40, minWidth: 50 }}
                />
              }
              text={Techno.aws}
              name="Amazon Web Services"
            />
            <ListItem
              icon={<HerokuLogo />}
              text={Techno.heroku}
              name="Heroku"
            />
            <ListItem
              icon={<NetlifyLogo />}
              text={Techno.netlify}
              name="Netlify"
            />
          </div>
        }
      />
    </div>
  )
}

export default CardContainer
