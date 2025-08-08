import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Spatial Design with the Apple Vision Pro @ SIGGRAPH</span>,
    banner: {
    key: 'announcement-2025',
    text: (
      <a href="https://s2025.conference-schedule.org/presentation/?id=gensub_405&sess=sess306" target="_blank" rel="noreferrer">
        🎉 Join us at SIGGRAPH on Monday, August 11th 2025 from 2:00-3:30 pm at West Building, Exhibit Hall B →
      </a>
    ),
    dismissible: true
  },
  project: {
    link: 'https://github.com/debbieyuen/spatialui',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/debbieyuen/spatialui',
  footer: {
    text: 'Copyright @debbieyuen',
  },
}

export default config
