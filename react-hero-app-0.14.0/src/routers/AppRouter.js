//**_______________________________________________________________________________________________________________________________________________*/
//** Este sistema de rutas principal solo es que este tiene el router, es la unica diferencia */
import React from 'react' //** useContext nos permite acceder a datos globales desde cualquier componente */
import {
    BrowserRouter as Router, //** Le cambiamos el nombre a Router */
    Switch,
    Route
  } from "react-router-dom";




import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => { //** exporto este FC a HeroesApp */

    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/" component={ DashboardRoutes } />

                </Switch>
            </div>
    </Router>
    )
}