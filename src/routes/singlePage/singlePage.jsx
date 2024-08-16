import "./singlePage.scss";
import { listData } from "../../lib/dummydata";

function SinglePage() {
    const data = listData;
    return (
        <div className="listPage">
            <div className="listContainer">List</div>
            <div className="mapContainer">Map</div>
        </div>
    );
}

export default SinglePage;
