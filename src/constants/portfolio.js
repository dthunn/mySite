import React from 'react'

import turtleTroupeStationary from '../images/turtleTroupeStationary.jpg'

import karrays from '../images/karrays.jpg'

import novoStationary from '../images/novostationary.jpg'

import ImageJs from '../components/ImageJS'
import ImageAlps from '../components/ImageAlps'
import ImageCrown from '../components/ImageCrown'
import ImageGit from '../components/ImageGit'
import ImageKarray from '../components/ImageKarray'
import ImageLogger from '../components/ImageLogger'
import ImageNovo from '../components/ImageNovo'
import ImageSf from '../components/ImageSf'
import ImageTurtle from '../components/ImageTurtle'

export default [
  {
    image: <ImageCrown />,
    title: 'Crown Clothing',
    text: 'React',
    link: 'https://dt-clothing-site.herokuapp.com/',
    alt: 'Clothing Site',
  },
  {
    image: <ImageJs />,
    title: 'JS Conference',
    text: 'UI',
    link: 'https://zealous-nobel-933483.netlify.com',
    alt: 'JS Conference',
  },
  {
    image: <ImageSf />,
    title: 'Heeder',
    text: 'Django',
    link: 'https://heeder-application.herokuapp.com/',
    alt: 'Blog',
  },
  {
    image: <ImageAlps />,
    title: 'Travel Alps',
    text: 'UI',
    link: 'https://focused-sammet-b22f4d.netlify.com/',
    alt: 'Travel Site',
  },
  {
    image: <ImageGit />,
    title: 'GitHub Searcher',
    text: 'React',
    link: 'https://elated-bardeen-a61c26.netlify.com/',
    alt: 'GitHub Searcher',
  },

  {
    image: <ImageLogger />,
    title: 'System Logger',
    text: 'React',
    link: 'https://shrouded-sierra-84061.herokuapp.com/',
    alt: 'System Logger',
  },
  {
    image: <ImageNovo />,
    title: 'Novo',
    text: 'Graphic Design',
    link: novoStationary,
    alt: 'Novo',
  },
  {
    image: <ImageTurtle />,
    title: 'Turtle Troupe',
    text: 'Graphic Design',
    link: turtleTroupeStationary,
    alt: 'Turtle Troupe',
  },
  {
    image: <ImageKarray />,
    title: "Karray's",
    text: 'Graphic Design',
    link: karrays,
    alt: "Karray's",
  },
]
