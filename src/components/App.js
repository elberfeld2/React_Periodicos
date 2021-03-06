import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import PeriodicosContainer from '../pages/PeriodicosContainer'
import PeriodicoContainer from '../pages/PeriodicoContainer'
import NotFound from '../pages/404'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PeriodicosContainer} />
            <Route exact path="/exercise" component={ExercisesContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route exact path="/:id" component={PeriodicoContainer} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App