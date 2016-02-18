import Layout from '../views/containers/Layout/Layout';
import Home from './../views/containers/Home/Home';
import Subtitle from './../views/containers/Subtitle/Subtitle';

export default [
  {
    path: '/',
    component: Layout,
    indexRoute: {
      component: Home
    },
    childRoutes: [
      {
        path: 'subtitles/seasons/:seasonId/episodes/:episodeId',
        component: Subtitle
      },
    ]
  }
];
