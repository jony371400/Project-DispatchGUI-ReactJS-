import Graph from './component/graph'
import Control from './component/control'

const Home = () => {

    return <div className='app'>

        <div className="area-title">Dispatch System GUI</div>

        <div className="area-graph">
            <Graph></Graph>
        </div>

        <div className="area-control">
            <Control></Control>
        </div>

    </div>
}

export default Home