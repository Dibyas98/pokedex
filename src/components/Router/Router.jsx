import React, { Suspense } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { LazyLainding, LazyPokeDetail } from '../Lazy/LazyLoading'
import Loading from '../ui/Loading'
import Lainding from '../pages/Lainding'
import PokeDetail from '../ui/PokeDetail'
import PokeDetailLaindingPage from '../pages/PokeDetailLaindingPage'
import Layour from '../pages/Layour'

function Router() {
    const route = createBrowserRouter([
      {
        path:'/',
        element:<Layour></Layour>,
        children:[
          {
            path:'/',
            element:<Suspense fallback={''}><Lainding></Lainding></Suspense>
        },
        {
            path:'/:name/:id',
            element:<PokeDetailLaindingPage></PokeDetailLaindingPage>
            
        }
        ]
      }
        
    ])
  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default Router
