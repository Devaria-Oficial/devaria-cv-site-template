import { liveURL } from "../../../custom.config";
import { IPageTheme, IPageURL } from "../../../typescript/interfaces/common.interface";

export const pageURLs: IPageURL[] = [
  {
    url: liveURL + '/',
    title: 'Index 1'
  },
  {
    url: liveURL + '/index-2',
    title: 'Index 2'
  },
  {
    url: liveURL + '/index-3',
    title: 'Index 3'
  },
  {
    url: liveURL + '/index-4',
    title: 'Index 4'
  },
  {
    url: liveURL + '/index-5',
    title: 'Index 5'
  },
  {
    url: liveURL + '/index-6',
    title: 'Index 6'
  },
  {
    url: liveURL + '/index-7',
    title: 'Index 7'
  },
  {
    url: liveURL + '/blog',
    title: 'Blog'
  },
  {
    url: liveURL + '/blog-sidebar',
    title: 'Blog Sidebar'
  },
  {
    url: liveURL + '/blog-details',
    title: 'Blog Details'
  },
  {
    url: liveURL + '/blog-details-sidebar',
    title: 'Blog Details Sidebar'
  },
  {
    url: liveURL + '/single-portfolio',
    title: 'Single Portfolio'
  }
]

export const pageThemes: IPageTheme[] = [
  {
    name: 'orange',
    color: '#fd7e14'
  },
  {
    name: 'teal',
    color: '#9cf27f'
  },
  {
    name: 'primary',
    color: '#00bcd4'
  },
  {
    name: 'info',
    color: '#304CFD'
  },
  {
    name: 'grey',
    color: '#6c757d'
  },
  {
    name: 'red',
    color: '#ef4d56'
  },
  {
    name: 'turquoise',
    color: '#0dcaf0'
  },
  {
    name: 'blue',
    color: '#425cbb'
  },
  {
    name: 'secondary',
    color: '#7081b9'
  },
  {
    name: 'pink',
    color: '#f05492'
  },
  {
    name: 'green',
    color: '#69c380'
  },
  {
    name: 'yellow',
    color: '#ffc835'
  }
]