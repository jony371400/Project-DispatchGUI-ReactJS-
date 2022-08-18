import Graph from './component/graph'
import Control from './component/control'

const Home = () => {
    // UI Effect
    // function openNav() {
    //     document.getElementById("myNav").style.width = "100%";
    // }

    // function closeNav() {
    //     document.getElementById("myNav").style.width = "0%";
    // }
    
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