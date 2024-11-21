import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  bannerDisplay: 'flex',
  toggleTheme: () => {},
  closeBanner: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
